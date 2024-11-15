<template lang="pug">
.pageTop
header#contentHeader
  .header_inner
    .header_menu
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
            router-link(to="/character") キャラクター
            ul
              li
                router-link(to="/character/shimizu") 清水文香
              li
                router-link(to="/character/yanase") 柳瀬称揚
              li
                router-link(to="/character/kimoto") 木元ゆか
              li
                router-link(to="/character/meiji") 明治平一
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
  name: "AppHeader",
};
</script>

<style lang="scss" scoped></style>
