<template>
  <div class="introduce">
    <div class="img_container">
      <div class="img_top">
        <div class="img_one">
          <img
            src="../../../assets/规划图/4-容城/电建/雄安·电建智汇城.png"
            alt=""
          />
          <img src="../../../assets/规划图/4-容城/电建/文字1.png" alt="" />
        </div>
        <div class="img_two">
          <img src="../../../assets/规划图/4-容城/电建/文字2.png" alt="" />
        </div>
      </div>
      <img src="../../../assets/规划图/4-容城/电建/电建智慧城图.png" alt="" />
      <img
        src="../../../assets/规划图/4-容城/电建/1.png"
        alt=""
      />
      <img

        src="../../../assets/规划图/4-容城/电建/2.png"
        alt=""
      />
      <img
  
        src="../../../assets/规划图/4-容城/电建/3.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import animationObj from "../../../util/GsapFn";
import { onMounted, ref } from "vue";
// let flag = true;
// let flag2 = true;
onMounted(() => {
  animationObj.introduceAnimation(".introduce");
  // let dom = document.querySelector(".introduce");
  // dom?.addEventListener("scroll", (event: any) => {
  //   let scrollTopVal = event.target.scrollTop;
  //   console.log(scrollTopVal);
  //   if (scrollTopVal === 364) {
  //     id.value = 1;
  //   }
  //   if (scrollTopVal >= 800 && scrollTopVal <= 810) {
  //     let timeline = gsap.timeline();
  //     if (flag) {
  //       timeline.fromTo(
  //         `.introduce .img_container>img:nth-child(3)`,
  //         {
  //           opacity: 0,
  //           y: 746,
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           ease: "power4.out",
  //           duration: 1.5,
  //         }
  //       );
  //       timeline.fromTo(
  //         `.introduce .img_container>img:nth-child(4)`,
  //         {
  //           opacity: 0,
  //           y: 613,
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           ease: "power4.out",
  //           duration: 1.5,
  //           onComplete: function () {
  //             // 动画播放完成时调用
  //             flag = false;
  //           },
  //         }
  //       );
  //     }
  //   }
  //   if (scrollTopVal >= 1400 && scrollTopVal <= 1410) {
  //     if (flag2) {
  //       gsap.fromTo(`.introduce .img_container>img:nth-child(5)`,
  //           {
  //               opacity: 0,
  //               y: 644
  //           },
  //           {
  //               opacity: 1,
  //               y: 0,
  //               ease: "power4.out",
  //               duration: 1.5,
  //               onComplete: function () { // 动画播放完成时调用
  //                   flag2 = false;
  //               }
  //           },
  //       )
  //     }
  //   }
  // });
});
</script>
<style scoped lang="less">
.introduce::-webkit-scrollbar {
  display: none;
}
.introduce {
  width: inherit;
  height: inherit;
  overflow-y: scroll;
  overflow: scroll;

  //   height: inherit;
  padding: 1px;
}
.img_top {
  display: flex;
  justify-content: space-between;
  margin-top: 200px;

  .img_one {
    margin-left: 59px;
    display: flex;
    flex-direction: column;
    img:nth-child(2) {
      width: 405px;
      height: 46px;
      margin-top: 57px;
    }
  }
  .img_two {
    margin-right: 53px;
  }
}
.img_container {
  padding: 1px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   text-align: center;
}
.img_container > img:nth-child(2) {
  margin-top: 136px;
}
.img_container > img:nth-child(3) {
  margin-top: 246px;
  // opacity: 0;
  width: 2209px;
  margin-left: 816px;
  height: 43px;
}
.img_container > img:nth-child(4) {
  // opacity: 0;
  margin-top: 113px;
  width: 3375px;
  margin-left: 233px;
  height: 284px;
}
.img_container > img:nth-child(5) {
  margin-top: 144px;
  // opacity: 0;
}
</style>
