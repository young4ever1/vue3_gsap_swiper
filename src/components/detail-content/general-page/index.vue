<template>
  <div class="general_rules">
    <div class="rules_container">
      <div class="rules_left">
        <div class="left_top">
          <p>总体城乡空间布局概况</p>
          <div class="let_top_content">
            <div class="detail">
              <p>总体城乡空间布局</p>
              <text
                >综合考虑新区定位、发展目标和现状条件，坚持城乡统筹、均衡发展、宜居宜业，规划形成“一主、五辅、多节点”的新区城乡空间布局。</text
              >
            </div>
            <div class="detail">
              <p>一 主</p>
              <text
                >“一主”即起步区，选择容城、安新两县交界区域作为起步区，是新区的主城区，按组团式布局，先行启动建设。</text
              >
            </div>
            <div class="detail">
              <p>五 辅</p>
              <text
                >“五辅”即雄县、容城、安新县城及寨里、昝岗五个外围组团，全面提质扩容雄县、容城两个县城，优化调整安新县城，建设寨里、昝岗两个组团，与起步区之间建设生态隔离带。</text
              >
            </div>
            <div class="detail">
              <p>多节点</p>
              <text
                >“多节点”即若干特色小城镇和美丽乡村，实行分类特色发展，划定特色小城镇开发边界，严禁大规模开发房地产。</text
              >
            </div>
          </div>
        </div>
        <div class="left_bot">
          <p>片区基本指标数据信息</p>
          <div class="left_bot_content">
            <div class="left_bot_number">
              <p>规划面积</p>
              <p>
                <span ref="num1" style="width: 163px">1770</span><b>平方公里</b>
              </p>
            </div>
            <div class="left_bot_number">
              <p>建设用地总规模</p>
              <p>
                <b>约</b><span ref="num2" style="width: 148px">530</span
                ><b>平方公里</b>
              </p>
            </div>
            <div class="left_bot_number">
              <p>美丽乡村规划建设用地规模</p>
              <p>
                <b>约</b><span ref="num3" style="width: 98px">50</span
                ><b>平方公里</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="rules_right"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// * gsap 动画库
import animationObj from "../../../util/GsapFn";
// * 数字自增
import numChage from "../../../util/NumAdd";
import { onMounted, defineProps, ref, onBeforeUnmount,watch } from "vue";
const props = defineProps({
  id: {
    typeof: Number,
    default: 1,
  },
});
let num1 = ref();
let num2 = ref();
let num3 = ref();
onMounted(() => {
  animationObj.firstPage(".general_rules");
  numChage(true, 1, 1770, num1, 34, 30);
  numChage(true, 1, 530, num2, 10, 30);
  numChage(true, 1, 50, num3, 1, 30);
});
onBeforeUnmount(() => {
  // alert(123);
  // numChage(false, 1, 1770, num1, 34, 50);
  // numChage(false, 1, 1770, num1, 34, 50);
  // numChage(false, 1, 1770, num1, 34, 50);
});
watch(
  () => props.id,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
    // if(newVal){
    // animationObj.firstPage(".general_rules");

    // }
  }
);
</script>
<style scoped lang="less">
@import url("./css/index.css");
</style>
