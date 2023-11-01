<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>容东组团概况</p>
      <div class="number_bg">
        <span ref="num1">12.7</span>
        <span><b ref="num2">1140</b>万</span>
        <span><b ref="num3">17</b>万</span>
        <span><b ref="num4">470</b>万</span>
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

onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 12.7, num1, 1, 100);
  numChage(true, 1, 1140, num2, 114, 100);
  numChage(true, 1, 17, num3, 2, 100);
  numChage(true, 1, 470, num4, 47, 100);
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
  width: 1534px;
  height: 741px;
  background: url("../../../assets/数字用边框切图/04-容东4-片区基本指标数据信息.png")
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  b {
    font-weight: normal;
  }
  span {
    position: absolute;
    font-size: 90px;
    line-height: 90px;
    font-family: "hyds";
    font-weight: normal;
    color: #ff6c00;
  }
  span:nth-child(1) {
    left: 136px;
    top: 241px;
  }
  span:nth-child(2) {
    left: 609px;
    top: 241px;
  }
  span:nth-child(3) {
    right: 145px;
    top: 248px;
  }
  span:nth-child(4) {
    right: 664px;
    top: 550px;
  }
}
.start_right {
  margin-left: 90px;
  width: 1678px;
  height: 1182px;
  background: url("../../../assets/规划图/4-容城/容东/4-容东-片区基本指标数据信息.png");
  background-size: 100% 100%;
}
</style>
