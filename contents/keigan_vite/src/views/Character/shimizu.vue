<template lang="pug">
.main_wrap
  article.Character
    section.Character_wrapper
      .Character_innner
        .Character_profile
          .Character_profile-img
            img(src="../../assets/img/character.png")
          .Character_profile-txt
            h2 清水文香
            ul
              li
                span 職業
                p 大学生
              li
                span 本籍
                p 東京都 〇〇〇区△△△市
              li
                span 本籍
                p 東京都 〇〇〇区△△△市(同上)
        .Character_about
          p 上記の者に対する花川鬼灯氏殺人事件被疑事件につき、20XX年11月XX日(金)■■警察署において、本職はあらかじめ被疑者に対し、自己の意思に反して供述する必要がない旨を告げて取り調べを行ったところ、任意 次のとおり供述した。
          ul
            li
              span 出身
              p 東京都
            li
              span 位記・勲章・年金
              p 特記なし
            li
              span 前科
              p 前科なし
                span 尚、供述の結果『10年前の一家全焼事故』の被害者であることが判明
        .Character_state
          .Character_state-block
            p
              | 私は、20XX年11月XX日(金) 午後21時30分頃、花川鬼灯氏が所有するNマンション20階の2004号室にて、インターネットで入手した拳銃を使用し花川氏を殺害しました。
              br
              | 私には親兄弟はおらず、親戚もおりません。私は『10年前の大津家全焼事故』の被害者です。

</template>

<script>
export default {
  name: "shimizu",
};
</script>

<style lang="scss" scoped></style>
