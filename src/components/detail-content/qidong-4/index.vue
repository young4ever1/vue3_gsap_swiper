<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>启动区组团概况</p>
      <div class="number_bg">
        <span ref="num1">38</span>
        <span><b ref="num2">2800</b>万</span>
        <span><b ref="num3">910</b>万</span>
        <span><b ref="num4">1</b>万</span>
        <span ref="num5">26</span>
        <span><b ref="num6">1505</b>万</span>
        <span><b ref="num7">245</b>万</span>
        <span><b ref="num8">140</b>万</span>
        <span><b ref="num9">1000</b>万</span>
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
  numChage(true, 1, 38, num1, 3, 100);
  numChage(true, 1, 2800, num2, 280, 100);
  numChage(true, 1, 910, num3, 91, 100);
  numChage(true, 1, 26, num5, 2, 100);
  numChage(true, 1, 1505, num6, 150, 100);
  numChage(true, 1, 245, num7, 24, 100);
  numChage(true, 1, 140, num8, 14, 100);
  numChage(true, 1, 1000, num9, 100, 100);
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
  margin-top: 75px;
  width: 1575px;
  height: 1037px;
  background: url("../../../assets/数字用边框切图/04-启动区-片区基本指标数据信息.png")
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
    left: 113px;
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
    right: 130px;
    top: 253px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 114px;
  }
  span:nth-child(6) {
    top: 545px;
    left: 450px;
  }
  span:nth-child(7) {
    top: 555px;
    right: 492px;
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
  background: url("../../../assets/规划图/启动区/4-启动区-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
