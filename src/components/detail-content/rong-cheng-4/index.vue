<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>容城组团概况</p>
      <div class="number_bg">
        <span ref="num1">15.43</span>
        <span><b ref="num2">1046</b>万</span>
        <span><b ref="num3">190</b>万</span>
        <span><b ref="num4">10.5</b>万</span>
        <span ref="num5">11.37</span>
        <span><b ref="num6">454</b>万</span>
        <span><b ref="num7">135</b>万</span>
        <span><b ref="num8">267</b>万</span>
        <span><b ref="num9">262</b>万</span>
      </div>
    </div>
    <div class="start_right"></div>
  </div>
</template>
<script setup lang="ts">
import numChage from "../../../util/NumAdd";
import animationObj from "../../../util/GsapFn";
import { onMounted, ref, defineProps, watch } from "vue";
import mitts from "../../../util/EventBus";

let num1 = ref();
let num2 = ref();
let num3 = ref();
let num4 = ref();
let num5 = ref();
let num6 = ref();
let num7 = ref();
let num8 = ref();
let num9 = ref();
onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 15.43, num1, 1.5, 100);
  numChage(true, 1, 1046, num2, 105, 100);
  numChage(true, 1, 190, num3, 19, 100);
  numChage(true, 1, 10.5, num4, 1, 100);
  numChage(true, 1, 11.37, num5, 1, 100);
  numChage(true, 1, 454, num6, 45, 100);
  numChage(true, 1, 135, num7, 13, 100);
  numChage(true, 1, 267, num8, 26, 100);
  numChage(true, 1, 262, num9, 26, 100);
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
  height: 1037px;
  background: url("../../../assets/数字用边框切图/04-容城4-片区基本指标数据信息.png")
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  span {
    position: absolute;
    font-size: 80px;
    line-height: 80px;
    font-family: "hyds";
    font-weight: normal;
    color: #ff6c00;
  }
  b {
    font-weight: normal;
  }
  span:nth-child(1) {
    left: 42px;
    top: 241px;
  }
  span:nth-child(2) {
    left: 444px;
    top: 241px;
  }
  span:nth-child(3) {
    right: 510px;
    top: 241px;
  }
  span:nth-child(4) {
    right: 74px;
    top: 253px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 71px;
  }
  span:nth-child(6) {
    top: 545px;
    left: 450px;
  }
  span:nth-child(7) {
    top: 547px;
    right: 512px;
  }
  span:nth-child(8) {
    top: 855px;
    left: 470px;
  }
  span:nth-child(9) {
    top: 856px;
    right: 503px;
  }
}
.start_right {
  margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/4-容城/容城/4-容城片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
