<template>
  <div class="page_num">
    <b></b><span>{{ props.prevPage < 10 ? 0 : "" }}{{ props.prevPage }}</span
    ><b></b>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  prevPage: {
    typeof: Number,
    default: 1,
  },
});
</script>
<style scoped lang="less">
.page_num {
  position: absolute;
  bottom: 61px;
  left: 117px;
  font-family: "syht";
  font-size: 32px;
  display: flex;
  align-items: center;
  //   justify-content: center;
  b {
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #000;
  }
  span {
    margin: 0 17px;
  }
}
</style>
