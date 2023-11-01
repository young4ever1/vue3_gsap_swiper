<template>
  <div class="image_three">
    <p>容城组团风貌</p>
    <div class="image_container">
      <div>
        <img
          src="../../../assets/规划图/4-容城/容城/7-特色空间意向/1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="../../../assets/规划图/4-容城/容城/7-特色空间意向/1拷贝.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="../../../assets/规划图/4-容城/容城/7-特色空间意向/1拷贝2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import animationObj from '../../../util/GsapFn';
onMounted(()=>{
  animationObj.rongchengImage3('.image_three');
})
</script>
<style scoped lang="less">
.image_three {
  width: inherit;
  height: inherit;
  padding: 1px;
  & > p:nth-child(1) {
    margin-top: 159px;
    margin-left: -271px;
    width: 322px;
    height: 84px;
    background: url("../../../assets/1-总体规划/矩形.png") no-repeat;
    background-position: bottom;
    line-height: 54px;
    font-size: 52px;
    font-family: "syht";
    font-weight: 500;
    color: #3b3b3b;
    text-shadow: 0px 4px 0px rgba(223, 223, 223, 0.71);
  }
  .image_container {
    margin-left: 271px;
    display: flex;
    margin-top: 89px;
    div {
      width: 1080px;
      height: 1004px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    // div:nth-child(1) {
    //   // margin-top: 1004px;
    //   margin-left: 33px;
    // }
    div:nth-child(2) {
      // margin-top: 1004px;
      margin-left: 33px;
    }
    div:nth-child(3) {
      // margin-top: 1004px;
      margin-left: 33px;
    }
  }
}
</style>
