<template>
  <div class="fengmao_info">
    <div class="fengmao_left">
      <p>{{ otList.title }}</p>
      <div class="fengmao_left_bot">
        <!-- <div class="number">01</div> -->
        <div class="detail">
          <p>{{ otList.wordTitle }}</p>
          <div class="describe">
            <text>
              {{ otList.word }}
            </text>
           
          </div>
          <div class="describe_two"></div>
        </div>
      </div>
    </div>
    <div class="fengmao_right">
      <img :src="otList.image" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import animationObj from '../../../util/GsapFn/index.js'
defineProps({
  otList: {
    typeof: Object,
    default: {
      title: "",
      wordTitle: "",
      word: "",
      image: "",
    },
  },
});
onMounted(()=>{
  animationObj.fengmaoPage('.fengmao_info')
})
// interface UseType2 {
//   title: string;
//   wordTitle: string;
//   word: string;
//   image: "";
// }
// const typeOtList = props.otList as UseType2;
</script>
<style scoped lang="less">
.fengmao_info {
  width: inherit;
  height: inherit;
  display: flex;
}
.fengmao_left {
  width: 1570px;
  margin-top: 159px;
  margin-left: 271px;
  & > p:nth-child(1) {
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
  .fengmao_left_bot {
    display: flex;
    .number {
      font-size: 373px;
      font-family: "hyds";
      font-weight: normal;
      color: #3581f7;
      line-height: 290px;
    }
    .detail {
      margin-left: 183px;
      p {
        font-size: 80px;
        line-height: 80px;
        font-family: "syht";
        font-weight: bold;
        color: #3b3b3b;
      }
      .describe {
        margin-top: 39px;
        width: 1072px;
        height: 387px;
        display: flex;
        justify-content: center;
        align-items: center;
        // position: relative;
        background: url("../../../assets/通用切图/色块1.png");
        text {
          width: 944px;
          font-size: 36px;
          font-family: "syht";
          color: #ffff;
          font-weight: normal;
        }
      }
      .describe_two {
        margin-left: 31px;
        margin-top: -356px;
        z-index: -1;
        width: 1072px;
        height: 387px;
        position: absolute;
        background: url("../../../assets/通用切图/色块2.png");
      }
    }
  }
}
.fengmao_left_bot {
  margin-top: 327px;
  display: flex;
}
.fengmao_right {
  margin-top: 159px;
  margin-left: 110px;
  width: 1678px;
  height: 1182px;
  img {
    width: inherit;
    height: inherit;
  }
  // background: url("../../../assets/规划图/3-雄县/雄东/5-城市设计.png") no-repeat;
  // background-size: cover;
}
</style>
