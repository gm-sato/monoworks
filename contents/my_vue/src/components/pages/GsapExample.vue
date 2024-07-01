<template>
  <div>
    <h1>Scroll Animation Example</h1>
    <div ref="box" class="box"></div>
    <div style="height: 2000px;"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    gsap.to(this.$refs.box, {
      scrollTrigger: {
        trigger: this.$refs.box,
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true
      },
      x: 500,
      rotation: 360
    })
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin-top: 20px;
}
</style>
