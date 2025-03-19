<template lang="pug">
  div.modal-overlay(@click="close")
    div.modal-window(@click.stop :style="{ width: '1400px', height: '800px' }")
      .modal-header
        button.close-button(@click="close") ×
      .modal-content
        .modal-content-text
          h3 {{ modalContent.name }}
          p {{ modalContent.profile }}
          ul
            li(v-for="syndrome in syndromeList" :key="syndrome")
              img(:src="itemImg", :alt="syndrome", :class="[syndrome, modalContent.syndromes.includes(syndrome) ? 'active' : '']")
          canvas.status(ref="canvas")
        .modal-content-img
          img(:src="modalContent.image")
      .modal-footer
        button.change-modal-button(v-if="previousModal" @click="goToModal(previousModal)") 前へ
        button.change-modal-button(v-if="nextModal" @click="goToModal(nextModal)") 次へ
</template>

<script>
import { modalData } from "@/assets/js/modal_data.js";
// インポート方式で画像アセットを取得する
import itemImg from "@/assets/images/item.png";

export default {
  name: "Modal",
  props: {
    number: { type: Number, required: true },
  },
  data() {
    return {
      isOpen: true,
      graphStatuses: [],
      animationFrameId: null,
      // 固定の13個のシンドローム名リスト
      syndromeList: [
        "AngelHalo",
        "Balor",
        "BlackDog",
        "BramStoker",
        "Exile",
        "Hanuman",
        "Chimera",
        "Morpheus",
        "Neumann",
        "Orcus",
        "Salamandra",
        "Solaris",
        "Additional",
      ],
      // 画像アセットを data にも保持（または computed でも可）
      itemImg,
    };
  },
  computed: {
    modalContent() {
      return (
        modalData[this.number] || {
          number: this.number,
          id: this.number,
          name: "データなし",
          image: "",
          syndromes: [],
          profile: "内容がありません。",
          status: [{}],
          group: null,
        }
      );
    },
    sortedModalNumbers() {
      return Object.keys(modalData)
        .map(Number)
        .sort((a, b) => a - b);
    },
    currentIndex() {
      return this.sortedModalNumbers.indexOf(this.number);
    },
    previousModal() {
      return this.currentIndex > 0
        ? this.sortedModalNumbers[this.currentIndex - 1]
        : null;
    },
    nextModal() {
      return this.currentIndex < this.sortedModalNumbers.length - 1
        ? this.sortedModalNumbers[this.currentIndex + 1]
        : null;
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
    const statusObj = this.modalContent.status[0] || {};
    this.graphStatuses = Object.keys(statusObj).map((key) => ({
      label: key,
      totalSegments: 20,
      filledSegments: statusObj[key],
      activatedCount: 0,
      frameCount: 0,
    }));
    this.initCanvas();
  },
  unmounted() {
    document.body.style.overflow = "";
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.resizeCanvas);
  },
  watch: {
    number(newVal, oldVal) {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
      this.resetCanvasData();
      this.initCanvas();
    },
  },
  methods: {
    close() {
      this.isOpen = false;
      this.$emit("close");
    },
    goToModal(targetNumber) {
      this.$emit("change-modal", targetNumber);
    },
    resetCanvasData() {
      const statusObj = this.modalContent.status[0] || {};
      this.graphStatuses = Object.keys(statusObj).map((key) => ({
        label: key,
        totalSegments: 20,
        filledSegments: statusObj[key],
        activatedCount: 0,
        frameCount: 0,
      }));
    },
    initCanvas() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      window.addEventListener("resize", this.resizeCanvas);

      this.baseCanvasWidth = 800;
      this.baseSegmentWidth = 20;
      this.baseGap = 3;
      this.baseStatusSpacing = 40;
      this.baseMarginLeft = 170;

      this.segmentWidth = this.baseSegmentWidth;
      this.gap = this.baseGap;
      this.statusSpacing = this.baseStatusSpacing;
      this.marginLeft = this.baseMarginLeft;
      this.marginTop = 30;
      this.fontSize = 24;
      this.segmentHeight = 30;

      this.time = 0;
      this.speed = 1;
      this.minHue = 0;
      this.maxHue = 30;
      this.hueRange = this.maxHue - this.minHue;

      this.resizeCanvas();
      this.draw();
    },
    resizeCanvas() {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      const scaleFactor = this.canvas.width / this.baseCanvasWidth;
      this.segmentWidth = this.baseSegmentWidth * scaleFactor;
      this.gap = this.baseGap * scaleFactor;
      this.statusSpacing = this.baseStatusSpacing * scaleFactor;
      this.marginLeft = this.baseMarginLeft * scaleFactor;
    },
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.graphStatuses.forEach((status, index) => {
        status.frameCount++;
        if (
          status.frameCount % 5 === 0 &&
          status.activatedCount < status.filledSegments
        ) {
          status.activatedCount++;
        }
        const yOffset = this.marginTop + index * this.statusSpacing;
        this.ctx.fillStyle = "#000";
        this.ctx.font = `${this.fontSize}px "Impact", Charcoal`;
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(status.label, 10, yOffset + this.segmentHeight / 2);
        for (let i = 0; i < status.totalSegments; i++) {
          const x = this.marginLeft + i * (this.segmentWidth + this.gap);
          if (i < status.activatedCount) {
            const hue =
              this.minHue +
              ((this.time * this.speed + i * 3) % (this.hueRange + 1));
            this.ctx.fillStyle = `hsl(${hue}, 80%, 50%)`;
          } else {
            this.ctx.fillStyle = "rgba(200,200,200,1)";
          }
          this.ctx.fillRect(x, yOffset, this.segmentWidth, this.segmentHeight);
        }
      });
      this.time++;
      this.animationFrameId = requestAnimationFrame(this.draw);
    },
  },
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加してください */
</style>
