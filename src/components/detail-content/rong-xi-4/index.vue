<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>容西组团概况</p>
      <div class="number_bg">
        <span ref="num1">7.8</span>
        <span><b ref="num2">653</b>万</span>
        <span><b ref="num3">218</b>万</span>
        <span><b ref="num4">10</b>万</span>
        <span><b ref="num5">6.9</b></span>
        <span><b ref="num6">350</b>万</span>
        <span><b ref="num7">85</b>万</span>
      </div>
    </div>
    <div class="start_right"></div>
  </div>
</template>
<script setup lang="ts">
import numChage from "../../../util/NumAdd";
import animationObj from "../../../util/GsapFn";
import { onMounted, ref, defineProps, watch } from "vue";

let num1 = ref();
let num2 = ref();
let num3 = ref();
let num4 = ref();
let num5 = ref();
let num6 = ref();
let num7 = ref();
onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 7.8, num1, 1, 100);
  numChage(true, 1, 653, num2, 65, 100);
  numChage(true, 1, 218, num3, 21, 100);
  numChage(true, 1, 10, num4, 1, 100);
  numChage(true, 1, 6.9, num5, 1, 100);
  numChage(true, 1, 350, num6, 35, 100);
  numChage(true, 1, 85, num7, 8, 100);
});

</script>
<style scoped lang="less">
.start_zone_4 {
  margin-top: 159px;
  margin-left: 270px;
  //   width: inherit;
  //   height: inherit;
  display: flex;
}
.start_left > p:nth-child(1) {
  margin-left: -450px;
  width: 536px;
  height: 84px;
  background: url("../../../assets/1-总体规划/矩形.png") no-repeat;
  background-position: bottom;
  line-height: 54px;
  font-size: 54px;
  font-family: "syht";
  font-weight: 500;
  color: #3b3b3b;
  text-shadow: 0px 4px 0px rgba(223, 223, 223, 0.71);
}
.number_bg {
  margin-top: 177px;
  width: 1575px;
  height: 741px;
  background: url("../../../assets/数字用边框切图/04-容西4-片区基本指标数据信息.png")
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  span {
    position: absolute;
    font-size: 80px;
    line-height: 82px;
    font-family: "hyds";
    font-weight: normal;
    color: #ff6c00;
  }
  b {
    font-weight: normal;
  }
  span:nth-child(1) {
    left: 118px;
    top: 246px;
  }
  span:nth-child(2) {
    left: 470px;
    top: 251px;
  }
  span:nth-child(3) {
    right: 504px;
    top: 250px;
  }
  span:nth-child(4) {
    right: 119px;
    top: 247px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 118px;
  }
  span:nth-child(6) {
    top: 549px;
    left: 469px;
  }
  span:nth-child(7) {
    top: 553px;
    right: 519px;
  }
}
.start_right {
  margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/4-容城/容西/4-容西-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
