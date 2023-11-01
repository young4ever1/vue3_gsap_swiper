<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>寨里组团概况</p>
      <div class="number_bg">
        <span><b ref="num1">16.4</b> </span>
        <span><b ref="num2">1200</b>万</span>
        <span><b ref="num3">408</b>万</span>
        <span><b ref="num4">18</b>万</span>
        <span><b ref="num5">12</b>万</span>
        <span><b ref="num6">630</b>万</span>
        <span><b ref="num7">140</b>万</span>
        <span><b ref="num8">460</b>万</span>
        <span><b ref="num9">22</b>万</span>
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
let num9 = ref();
onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 16.4, num1, 1.5, 100);
  numChage(true, 1, 1200, num2, 120, 100);
  numChage(true, 1, 408, num3, 40, 100);
  numChage(true, 1, 18, num4, 2, 100);
  numChage(true, 1, 12, num5, 1, 100);
  numChage(true, 1, 630, num6, 63, 100);
  numChage(true, 1, 140, num7, 14, 100);
  numChage(true, 1, 460, num8, 46, 100);
  numChage(true, 1, 22, num9, 2, 100);
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
  background: url("../../../assets/数字用边框切图/06-寨里4-片区基本指标数据信息.png")
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  span {
    position: absolute;
    font-size: 90px;
    line-height: 92px;
    font-family: "hyds";
    font-weight: normal;
    color: #ff6c00;
  }
  b {
    font-weight: normal;
  }
  span:nth-child(1) {
    left: 116px;
    top: 246px;
  }
  span:nth-child(2) {
    left: 604px;
    top: 245px;
  }
  span:nth-child(3) {
    right: 643px;
    top: 244px;
  }
  span:nth-child(4) {
    right: 154px;
    top: 247px;
  }
  span:nth-child(5) {
    top: 547px;
    left: 129px;
  }
  span:nth-child(6) {
    top: 549px;
    left: 616px;
  }
  span:nth-child(7) {
    top: 553px;
    right: 658px;
  }
  span:nth-child(8) {
    top: 852px;
    left: 613px;
  }
  span:nth-child(9) {
    top: 849px;
    right: 669px;
  }
}
.start_right {
  // margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/6-寨里/4-安新-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
