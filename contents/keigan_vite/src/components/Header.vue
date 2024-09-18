<template lang="pug">
.pageTop
header#contentHeader
  .header_inner
    .header_menu
      .header_menu-top
        h2
          router-link(to="/") エンターテイナー<br class="br_sp">オーディションサイト
      a(href="https://mypage.3030.i-webs.jp/tdr-entertainer2024/" target="_blank").header_menu-entry
        p マイページ<br>はこちら
      .header_menu-job
        router-link(to="/character").header_menu-job-character キャラクター
        router-link(to="/dancer").header_menu-job-dancer ダンサー
        router-link(to="/suspect/shimizu").header_menu-job-dancer テスト
      router-link(to="/faq").header_menu-faq よくある質問
      .header_menu-nav
        .header_navTrigger
          a(href="javascript:void(0)")
            .header_navTrigger_line
              span
              span
              span
    .header_navOpen
      .header_navOpen_inner
        .header_navOpen_lists
          .header_navOpen_list.top
            router-link(to="/") TOP
          .header_navOpen_list.character
            router-link(to="/suspect") キャラクター
            ul
              li
                router-link(to="/suspect/shimizu") 清水文香
              li
                router-link(to="/suspect/yanase") 柳瀬称揚
              li
                router-link(to="/suspect/kimoto") 木元ゆか
              li
                router-link(to="/suspect/meiji") 明治平一
          .header_navOpen_list.dancer
            router-link(to="/files") 捜査資料
            ul
              li
                router-link(to="/files/episode") キラールージュ事件について
              li
                router-link(to="/files/statement") 供述調書
              li
                router-link(to="/files/report") 死体検案書
              li
                router-link(to="/files/scene") 事件現場の状況
              li
                router-link(to="/files/materials") 家宅捜査資料
          .header_navOpen_list.faq
            router-link(to="/faq") よくある質問
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
</style>
