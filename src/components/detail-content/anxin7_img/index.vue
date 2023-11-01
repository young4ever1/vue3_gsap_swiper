<template>
  <div class="image_two">
    <p>安新组团风貌</p>
    <div class="image_container">
      <div>
        <img src="../../../assets/规划图/5-安新/7-特色空间意向/1.png" alt="" />
      </div>
      <div>
        <img
          src="../../../assets/规划图/5-安新/7-特色空间意向/1拷贝.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import animationObj from "../../../util/GsapFn";
onMounted(() => {
  animationObj.animationImage2(".image_two");
});
</script>
<style scoped lang="less">
.image_two {
  width: inherit;
  height: inherit;
  padding: 1px;

  & > p:nth-child(1) {
    margin-top: 159px;
    margin-left: -271px;

    width: 322px;
    height: 84px;
    background: url("../../../assets/1-总体规划/矩形.png") no-repeat;
    background-position: bottom;
    line-height: 54px;
    font-size: 52px;
    font-family: "syht";
    font-weight: 500;
    color: #3b3b3b;
    text-shadow: 0px 4px 0px rgba(223, 223, 223, 0.71);
  }
  .image_container {
    margin-left: 271px;
    display: flex;
    margin-top: 89px;
    div {
      width: 1593px;
      height: 1004px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    div:nth-child(2) {
      margin-left: 117px;
    }
  }
}
</style>
