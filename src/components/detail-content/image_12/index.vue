<template>
  <div class="image_12">
    <p>容东片区风貌</p>
    <div class="image_container">
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/1.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/3.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/2.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/10.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/5.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/12.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/9.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/8.png" alt="" />
      </div>
      <div>
        <img src="../../../assets/规划图/4-容城/容东/容城-容东5/7.png" alt="" />
      </div>
      <div>
        <img
          src="../../../assets/规划图/4-容城/容东/容城-容东5/10.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="../../../assets/规划图/4-容城/容东/容城-容东5/11.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="../../../assets/规划图/4-容城/容东/容城-容东5/6.png"
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
  animationObj.image12(".image_12");
});
</script>
<style scoped lang="less">
.image_12 {
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
    flex-wrap: wrap;
    div {
      width: 525px;
      height: 465px;
      margin-bottom: 76px;
      margin-right: 30px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    // div:nth-child(2) {
    //   margin-left: 33px;
    // }
    // div:nth-child(3) {
    //   margin-left: 33px;
    // }
  }
}
</style>
