<template lang="pug">
div.l-bg
  article
    section.l-hero-image
      img(src="../assets/images/topMv_pc.png")
      h1 楽園‐Jerico‐
    section.l-handout
      .c-headingType2
        h2 HANDOUT
      .l-handout__container
        p.l-handout__container-text キミたちは捨てられた存在だ。
          br
          | 物心ついた頃にこの施設へと移り、施設で育ってきた。
          br
          | 君たちの目的はただ一つ、『ガーデン』での戦闘訓練を生活として送っている。
          br
          | キミたちの目的はただ一つ、『適性ランク』を上げることだけだ。
      .l-handout__list
        .l-handout__card
          img.l-handout__card-mv(src="../assets/images/handout.png" alt="カード画像")
          .l-handout__card-text
            h3 見出し見出し見出し見出し
            p 本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
        .l-handout__card
          img.l-handout__card-mv(src="../assets/images/handout.png" alt="カード画像")
          .l-handout__card-text
            h3 見出し見出し見出し見出し
            p 本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
        .l-handout__card
          img.l-handout__card-mv(src="../assets/images/handout.png" alt="カード画像")
          .l-handout__card-text
            h3 見出し見出し見出し見出し
            p 本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文


    section.l-character
      .c-headingType2
        h2 CHARACTER
      .l-character__wrapper
        ul.l-character__list
          li(data-number="1").l-character__list-item: img(src="../assets/images/character.png")
          li(data-number="2").l-character__list-item: img(src="../assets/images/character.png")
          li(data-number="3").l-character__list-item: img(src="../assets/images/character.png")
          li(data-number="4").l-character__list-item: img(src="../assets/images/character.png")
          li(data-number="5").l-character__list-item: img(src="../assets/images/character.png")
          li(data-number="6").l-character__list-item: img(src="../assets/images/character.png")

    section.l-story
      .l-story__container
        .l-story__text
          p 異能発現統制機関
          p 通称<br>『ガーデン』
          p そこに咲く花はない。<br>ただ冷たい器に収められた、<br>未成熟な命があるだけだった。
          p 壁の向こうには、何があるのか。
          p それを知る者はいない。<br>夢や希望は幻に過ぎず、<br>現実は冷酷で無情なままだ。
          p それでも、誰かが囁く。
          p 「この壁の向こうに、きっとあるの。私たちの—」
          p ダブルクロスThe 3rd Edition
          p 楽園 <span>-Jericho-</span>
          p ダブルクロス—それは裏切りを意味する言葉。

</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
