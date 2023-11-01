<template>
  <div class="start_zone_4">
    <div class="start_left">
      <p>片区基本指标数据信息</p>
      <div class="number_bg">
        <span ref="num1"></span>
        <span><b ref="num2">1</b>亿</span>
        <span><b ref="num3">1</b>万</span>
        <span ref="num4"></span>
      </div>
    </div>
    <div class="start_right"></div>
  </div>
</template>
<script setup lang="ts">
import numChage from "../../../util/NumAdd";
import animationObj from "../../../util/GsapFn";
import { onMounted, ref, nextTick, onUpdated } from "vue";
let num1 = ref();
let num4 = ref();

onMounted(() => {
  animationObj.numberPage(".start_zone_4");
  numChage(true, 1, 198, num1, 19, 100);
  numChage(true, 1, 100, num4, 10, 100);
});
onUpdated(() => {});
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
  width: 550px;
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
  width: 1534px;
  height: 741px;
  background: url("../../../assets/数字用边框切图/02-起步区4片区基本指标数据信息.png")
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
    b {
      font-weight: normal;
    }
  }
  span:nth-child(1) {
    left: 153px;
    top: 240px;
  }
  span:nth-child(2) {
    left: 687px;
    top: 238px;
  }
  span:nth-child(3) {
    right: 189px;
    top: 243px;
  }
  span:nth-child(4) {
    left: 159px;
    top: 547px;
  }
}
.start_right {
  margin-left: 90px;
  width: 1678px;
  height: 1182px;
  // background: url("../../../assets/规划图/2-起步区/4-起步区-片区基本指标数据信息.png");
  // background-size: 100% 100%;
}
</style>
