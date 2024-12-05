<template lang="pug">

.contents_wrapper
  .contents_btn
    button.btn#btn1(:class="{ clicked: clickedButtons[0] }" @click="handleClick(1)")
    button.btn#btn2(:class="{ clicked: clickedButtons[1] }" @click="handleClick(2)")
    button.btn#btn3(:class="{ clicked: clickedButtons[2] }" @click="handleClick(3)")
    button.btn#btn4(:class="{ clicked: clickedButtons[3] }" @click="handleClick(4)")
    button.btn#btn5(:class="{ clicked: clickedButtons[4] }" @click="handleClick(5)")
    button.btn#btn6(:class="{ clicked: clickedButtons[5] }" @click="handleClick(6)")
    button.btn#btn7(:class="{ clicked: clickedButtons[6] }" @click="handleClick(7)")
  .contents_inner
    h1 ホームページ
    p ボタンをすべて押すとページが切り替わります。
    p クリック状態: {{ clickedButtons }}
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HomePage",
  setup() {
    const router = useRouter();
    const clickedButtons = ref(Array(7).fill(false)); // 各ボタンのクリック状態を管理

    const handleClick = (id) => {
      clickedButtons.value[id - 1] = true; // 対応するインデックスを`true`に
      // 全てのボタンがクリックされたかを確認
      if (clickedButtons.value.every((clicked) => clicked)) {
        router.push("/new-page"); // ページ遷移
      }
    };

    return { clickedButtons, handleClick };
  },
};
</script>

<style>
.contents_wrapper {
  position: relative;
  display: block;
}

/* ボタンの基本スタイル */
button {
  width: 50px;
  height: 50px;
  border-radius: 150px;
  position: absolute;
  font-size: 16px;
  border: 5px solid #4caf50;
}

/* ボタンの位置を指定 */
#btn1 {
  top: 50px;
  left: 100px;
}

#btn2 {
  top: 150px;
  left: 300px;
}

#btn3 {
  top: 250px;
  left: 200px;
}

#btn4 {
  top: 350px;
  left: 50px;
}

#btn5 {
  top: 400px;
  left: 400px;
}

#btn6 {
  top: 100px;
  left: 500px;
}

#btn7 {
  top: 200px;
  left: 600px;
}

/* クリック済みのボタンのスタイル */
.clicked {
  background-color: #4caf50;
  color: white;
}
</style>
