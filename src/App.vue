<template>
  <div class="container">
    <nav_button></nav_button>
    <swiper_img></swiper_img>
    <detail_content></detail_content>
  </div>
</template>
<script setup lang="ts">
import nav_button from "./components/nav-button/index.vue";
import swiper_img from "./components/swiper-image/index.vue";
import detail_content from "./components/detail-content/index.vue";
// import { inject } from "vue-demi";
// const reload: any = inject("reload");
// setInterval(() => {
//   location.reload()
// },1000);
// let isPageHide = false;
// window.addEventListener("pageshow", function () {
//   if (isPageHide) {
//     window.location.reload();
//   }
// });
// window.onbeforeunload = function (e) {
//   return e;
// };
</script>
<style lang="less">
@import url("./css/index.css");
</style>
