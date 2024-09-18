<template lang="pug">
.main_wrap
  article.Top
    section.Topmv
      picture
        source(media="(max-width: 768px)", src="./assets/images/sp/sp_topmv.jpg")
        source(media="(min-width: 769px)", src="./assets/images/topmv.webp")
        img(src="../assets/images/topmv.webp")
      .Topmv-ttl
        picture
          source(media="(max-width: 768px)", :srcset="require('@/assets/images/sp/sp_decoText.svg')")
          source(media="(min-width: 769px)", :srcset="require('@/assets/images/decoText.svg')")
          img(v-lazy="require('@/assets/images/decoText.svg')",width="100%", alt="")
    section.About
      .About_wrapper
        h2 ともに物語を紡ぐ
        p 東京ディズニーリゾートのすべてのものには<br class="br_sp">ストーリーがあります。<br>アトラクションにも、ショップにも、<br class="br_sp">レストランにも。
        p それはエンターテイメントも同じ。
        p 東京ディズニーリゾートのエンターテイナーも、<br><span class="A-border">ディズニーストーリーの一部なのです。</span>
        p そして、そのストーリーはゲストを巻き込み、<br>大きな感動へと繋がっていきます。
        p 誰かの大切な思い出の１ページを、<br>私たちとともに紡いでいきませんか。
</template>

<script>

import topImage from '@/assets/images/topmv.webp';

export default {
  name: 'Home',
  data() {
    return {
      topImage
    };
  },
}
</script>

<style lang="scss" scoped>
.Topmv {
  position: relative;
  z-index: 1;

  img {
    display: block;
    width: 100%;
    height: px_vw(980px);
    object-fit: cover;
    object-position: 50% 20%;
  }

  &-ttl {
    position: absolute;
    display: block;
    width: 100%;
    bottom: px_vw(-20px);
    left: 50%;
    transform: translateX(-50%);

    img {
      width: px_vw(750px);
      height: auto;
      object-fit: contain;
      z-index: 10;
      margin: auto;
    }
  }
}
</style>
