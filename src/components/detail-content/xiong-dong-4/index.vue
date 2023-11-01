<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>雄东组团概况</p>
      <div class="number_bg">
        <span ref="num1">18</span>
        <span><b ref="num2">1392</b>万</span>
        <span><b ref="num3">604</b>万</span>
        <span><b ref="num4">18</b>万</span>
        <span><b ref="num5">12</b></span>
        <span><b ref="num6">630</b>万</span>
        <span><b ref="num7">158</b>万</span>
      </div>
    </div>
    <div class="start_right"></div>
  </div>
</template>
<script setup lang="ts">
import numChage from "../../../util/NumAdd";
import animationObj from "../../../util/GsapFn";
import mitts from "../../../util/EventBus";
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
  numChage(true, 1, 18, num1, 2, 100);
  numChage(true, 1, 1392, num2, 139, 100);
  numChage(true, 1, 604, num3, 60, 100);
  numChage(true, 1, 18, num4, 2, 100);
  numChage(true, 1, 12, num5, 1, 100);
  numChage(true, 1, 630, num6, 63, 100);
  numChage(true, 1, 158, num7, 15, 100);
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
  width: 2016px;
  height: 741px;
  background: url("../../../assets/数字用边框切图/03-雄东4-片区基本指标数据信息.png")
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  span {
    position: absolute;
    font-size: 90px;
    line-height: 82px;
    font-family: "hyds";
    font-weight: normal;
    color: #ff6c00;
  }
  b {
    font-weight: normal;
  }
  span:nth-child(1) {
    left: 167px;
    top: 241px;
  }
  span:nth-child(2) {
    left: 592px;
    top: 241px;
  }
  span:nth-child(3) {
    right: 657px;
    top: 241px;
  }
  span:nth-child(4) {
    right: 162px;
    top: 242px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 161px;
  }
  span:nth-child(6) {
    top: 545px;
    left: 629px;
  }
  span:nth-child(7) {
    top: 547px;
    right: 660px;
  }
}
.start_right {
  // margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/3-雄县/雄东/4-雄东-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
