<template lang="pug">
div.l-bg
  article
    section.l-hero-image
      h1 HELLO HERO
    section.l-story
      .m-headingType2
        h2 STORY
      .l-story_text
        p 死んだはずの人間は、その苦しみから抜け出せずにいた。
          br
          | 正気を失った人間は、曖昧な日々をただ過ごしていた。
          br
          | そしてただ平和な日常の中にいる生きた人間は、
          br
          | 今日もその平和を謳歌していた。

        p これは、そんな出会うはずのなかった３人が
          br
          | 「ヒーロー」になるまでの数日間の物語。
    section.l-handout
      .m-headingType2
        h2 HANDOUT
      .l-handout_list
        .l-handout_card
          h3.l-handout_card-name HO1
          p.l-handout_card-text
          router-link(to="/ho1").l-handout_card-link#handout01 リンク
        .l-handout_card
          h3.l-handout_card-name HO2
          p.l-handout_card-text
          router-link(to="/ho2").l-handout_card-link#handout02 リンク
        .l-handout_card
          h3.l-handout_card-name HO3
          p.l-handout_card-text
          router-link(to="/ho3").l-handout_card-link#handout03 リンク
    section.l-episode
      .m-headingType2
        h2 HANDOUT
      .l-episode_list
        .l-episode_card
          h3.l-episode_card-name 第一話<br>ヒーローと眠り姫
          .l-episode_card-about
            ul.l-episode_card-item
              li 難易度
              li ★★★★
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能

        .l-episode_card
          h3.l-episode_card-name 第二話<br>白雪姫は小人に会えない
          .l-episode_card-about
            ul.l-episode_card-item
              li 難易度
              li ★★★★
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能

        .l-episode_card
          h3.l-episode_card-name 第三話<br>天使と灰被り姫
          .l-episode_card-about
            ul.l-episode_card-item
              li 難易度
              li ★★★★
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能

        .l-episode_card
          h3.l-episode_card-name 第四話<br>秘密の絵本はアリスを笑う
          .l-episode_card-about
            ul.l-episode_card-item
              li 難易度
              li ★★★★
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能

        .l-episode_card
          h3.l-episode_card-name 最終話<br>ハロー、君がいた世界
          .l-episode_card-about
            ul.l-episode_card-item
              li 難易度
              li ★★★★
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能

    section.l-character
      h3 これはちっぽけなヒーローの物語
      ul
        li
        li
        li

    section.l-shop
      .l-shop_wrapper
        .l-shop_img
        .l-shop_text


  p ようこそ、私たちのホームページへ！
  router-link(to="/about") アバウトページへ

</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  color: #333;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
