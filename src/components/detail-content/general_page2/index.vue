<template>
  <div class="general_2">
    <div class="left_container">
      <p>规划用地比例</p>
      <div class="left_chart">
        <div class="chart" ref="chart"></div>
        <img src="../../../assets/1-总体规划/划线1.png" alt="" />
        <img src="../../../assets/1-总体规划/划线2.png" alt="" />
        <img src="../../../assets/1-总体规划/001.png" alt="" />
        <img src="../../../assets/1-总体规划/002.png" alt="" />
        <span><b ref="num1">30</b>%</span>
        <span><b ref="num2">70</b>%</span>
      </div>
    </div>
    <div class="right_container"></div>
  </div>
</template>
<script setup lang="ts">
// * gsap 动画库
import animationObj from "../../../util/GsapFn";
import { onMounted, ref } from "vue";
import numChage from "../../../util/NumAdd";
import * as echarts from "echarts";
let chart = ref();
let num1 = ref();
let num2 = ref();
onMounted(() => {
  console.log(echarts);
  let color = ["#03FCFF", "#00E5FF"];
  let seriesData = [
    { name: "B需求类型", value: 30 },
    {
      name: "A需求类型",
      value: 70,
      itemStyle: {
        normal: {
          //颜色渐变
          color: new echarts.graphic.LinearGradient(
            1,
            1,
            1,
            0, //(上-下 渐变)
            // 1, 1, 0, 0,  //(左上-右下 渐变)
            // 1, 0, 0, 0,  //(左-右 渐变)
            // 0, 1, 1, 0,  //(右上-左下 渐变)
            // 0, 1, 1, 1,  //(左-右 渐变)
            // 1, 0, 1, 1,  //(上-下 渐变)
            // 0, 0, 1, 0,  //(左-右 渐变)
            // 0, 0, 0, 1,  //(上-下 渐变)

            [
              { offset: 0, color: "#00E5FF" },
              { offset: 1, color: "#0082FF" },
            ]
          ),
        },
      },
    },
  ];
  let option = {
    color: color,
    tooltip: {
      // 这里设置tooltip为false即可取消hover效果
      show: false,
    },
    series: [
      {
        hoverAnimation: false,
        Animation: true,
        name: "需求类型占比",
        type: "pie",
        center: ["50%", "50%"],
        radius: "100%",
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          show: false,
          length: 0,
          length2: 0,
        },

        data: seriesData,
      },
    ],
  };
  let echartsInstance = echarts.init(chart.value);
  echartsInstance.setOption(option);
  numChage(true, 1, 30, num1, 3, 50);
  numChage(true, 1, 70, num2, 7, 50);
  animationObj.firstPage_2(".general_2");
  // console.log(echarts);
});
</script>
<style scoped lang="less">
.left_chart {
  position: relative;
  span {
    position: absolute;
    font-size: 90px;
    font-family: "hyds";
    color: #ff6c00;
    // background: linear-gradient(to bottom, #d9ebf1, #5debfe);
    // -webkit-background-clip: text;
    // color: transparent;
    b {
      font-weight: normal;
    }
  }
  span:nth-child(6) {
    top: 334px;
    left: 1078px;
  }
  span:nth-child(7) {
    top: 620px;
    left: 1078px;
  }
}
.left_chart img:nth-child(2) {
  position: absolute;
  left: 755px;
  top: 541px;
}
.left_chart img:nth-child(3) {
  position: absolute;
  left: 758px;
  top: 304px;
}
.left_chart img:nth-child(4) {
  position: absolute;
  left: 1028px;
  top: 290px;
}
.left_chart img:nth-child(5) {
  position: absolute;
  left: 1029px;
  top: 581px;
}
.general_2 {
  width: inherit;
  height: inherit;
  padding: 1px;
  display: flex;
}
.left_container {
  width: 1429px;
  height: 1180px;
  margin-top: 159px;
  margin-left: 271px;
}
.left_chart {
  height: 808px;
  margin-top: 185px;
}
.chart {
  width: 770px;
  height: 770px;
  margin-left: 63px;
  position: relative;
  // padding: 50px;
}

.left_container > p:nth-child(1) {
  height: 84px;
  font-size: 54px;
  line-height: 54px;
  margin-left: -540px;
  width: 540px;
  background: url("../../../assets/1-总体规划/矩形.png") no-repeat;
  background-position: bottom;
  font-family: "syht";
  font-weight: 500;
  color: #3b3b3b;
  text-shadow: 0px 4px 0px rgba(223, 223, 223, 0.71);
}
.right_container {
  margin-top: 159px;
  width: 1676px;
  height: 1180px;
  margin-left: 194px;
  background: url("../../../assets/1-总体规划/总体规划.png") no-repeat;
  background-size: 100% 100%;
}
</style>
