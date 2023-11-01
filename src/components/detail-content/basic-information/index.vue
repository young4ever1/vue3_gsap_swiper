<template>
  <div class="basic_info">
    <div class="basic_left">
      <p v-show="list.title !== ''">{{ list.title }}</p>
      <div class="basic_left_bot">
        <div class="number" v-show="list.number !== ''">
          0<span class="num">{{ list.number }}</span>
        </div>
        <div class="detail">
          <p v-show="list.wordTitle !== ''">{{ list.wordTitle }}</p>
          <div class="describe" v-show="list.word !== ''">
            <text v-show="list.word !== ''">{{ list.word }}</text>
          </div>
          <div class="describe_two" v-show="list.image !== ''"></div>
        </div>
      </div>
    </div>
    <div class="basic_right" v-show="list.image !== ''">
      <img :src="list.image" alt="" />
    </div>
  </div> 
</template>
<script setup lang="ts">
import {
  defineProps,
  onMounted,
  onUpdated,
  watch,
} from "vue";
// import animationObj from "../../../util/GsapFn";
const props = defineProps({
  list: {
    typeof: Object,
    default: {
      title: "",
      number: "",
      wordTitle: "",
      word: "",
      image: "",
    },
  },
  activeIndex: {
    typeof: Number,
    default: 0,
  },
});
onMounted(() => {
  // console.log(props.activeIndex);
  // animationObj.basicPage(".basic_info");
});
onUpdated(() => {
});

watch(
  () => props.activeIndex,
  (newVal, oldVal) => {
   
  }
);
</script>
<style scoped lang="less">
@import url("./css/index.css");
</style>
