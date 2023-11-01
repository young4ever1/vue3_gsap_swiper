<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>雄县组团概况</p>
      <div class="number_bg">
        <span><b ref="num1">14.80</b></span>
        <span><b ref="num2">1000</b>万</span>
        <span><b ref="num3">425</b>万</span>
        <span><b ref="num4">11.5</b>万</span>
        <span><b ref="num5">10</b></span>
        <span><b ref="num6">445</b>万</span>
        <span><b ref="num7">130</b>万</span>
        <span><b ref="num8">180</b>万</span>
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
let num8 = ref();

onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 14.8, num1, 1, 100);
  numChage(true, 1, 1000, num2, 100, 100);
  numChage(true, 1, 425, num3, 45, 100);
  numChage(true, 1, 11.5, num4, 1, 100);
  numChage(true, 1, 10, num5, 1, 100);
  numChage(true, 1, 445, num6, 45, 100);
  numChage(true, 1, 130, num7, 13, 100);
  numChage(true, 1, 180, num8, 18, 100);
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
  width: 536px;
  height: 84px;
  margin-left: -450px;
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

  height: 1038px;
  background: url("../../../assets/数字用边框切图/03-雄县4-片区基本指标数据信息.png")
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
    left: 99px;
    top: 241px;
  }
  span:nth-child(2) {
    left: 604px;
    top: 243px;
  }
  span:nth-child(3) {
    right: 648px;
    top: 241px;
  }
  span:nth-child(4) {
    right: 125px;
    top: 241px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 165px;
  }
  span:nth-child(6) {
    top: 545px;
    left: 604px;
  }
  span:nth-child(7) {
    top: 547px;
    right: 673px;
  }
  span:nth-child(8) {
    top: 844px;
    left: 632px;
  }
}
.start_right {
  // margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/3-雄县/雄县/4-雄县-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
