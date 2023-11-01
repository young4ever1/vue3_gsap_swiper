<template>
  <div class="detail_content">
    <!-- 首页swiper -->
    <swiper
      v-if="state.id === 1"
      :direction="'vertical'"
      @swiper="onSwiper"
      @transitionEnd="onTransitionEndOne"
    >
      <swiper-slide v-for="item in state.firstPageList">
        <general_page v-if="item.id === 30"></general_page>
        <general_page2 v-if="item.id === 31"></general_page2>
      </swiper-slide>
    </swiper>
    <!-- 电建 -->
    <introduce_components v-if="state.id === 12"></introduce_components>
    <!-- 其他页swiper -->
    <swiper
      class="mySwiper"
      :modules="modules"
      :direction="'vertical'"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @transitionEnd="onTransitionEnd"
      v-if="state.id !== 1 && state.id !== 12"
    >
      <swiper-slide v-for="item in state.baseList">
        <basic_information
          :list="item"
          :activeIndex="state.activeIndex"
          v-if="item.id === 1"
        ></basic_information>

        <!-- 起步区 -->
        <start_zone_4 v-if="item.id === 2"></start_zone_4>
        <fengmao_5 v-if="item.id === 3" :otList="state.otherList"></fengmao_5>

        <!-- 雄县 -->
        <xiongxian_4 v-if="item.id === 4"></xiongxian_4>
        <fengmao_5 v-if="item.id === 5" :otList="state.otherList"></fengmao_5>

        <!-- 雄东 -->
        <xiongdong_4 v-if="item.id === 6"></xiongdong_4>
        <fengmao_5 v-if="item.id === 7" :otList="state.otherList"></fengmao_5>

        <!-- 容城 -->
        <rongcheng_4 v-if="item.id === 8"></rongcheng_4>
        <fengmao_5 v-if="item.id === 9" :otList="state.otherList"></fengmao_5>
        <image_2 v-if="item.id === 10"></image_2>
        <image_3 v-if="item.id === 11"></image_3>

        <!-- 容东 -->
        <rongdong_3 v-if="item.id === 12"></rongdong_3>
        <fengmao_5 v-if="item.id === 13" :otList="state.otherList"></fengmao_5>
        <image_12 v-if="item.id === 14"></image_12>

        <!-- 容西 -->
        <rongxi_4 v-if="item.id === 15"></rongxi_4>
        <fengmao_5 v-if="item.id === 16" :otList="state.otherList"></fengmao_5>

        <!-- 安新 -->
        <anxin_4 v-if="item.id === 17"></anxin_4>
        <fengmao_5 v-if="item.id === 18" :otList="state.otherList"></fengmao_5>
        <anxin6_img v-if="item.id === 19"></anxin6_img>
        <anxin7_img v-if="item.id === 20"></anxin7_img>

        <!-- 寨里 -->
        <zhaili_4 v-if="item.id === 21"></zhaili_4>
        <fengmao_5 v-if="item.id === 22" :otList="state.otherList"></fengmao_5>

        <!-- 昝岗 -->
        <zangang_4 v-if="item.id === 23"></zangang_4>
        <fengmao_5 v-if="item.id === 24" :otList="state.otherList"></fengmao_5>

        <!-- 启动区 -->
        <qidong_4 v-if="item.id === 25"></qidong_4>
        <fengmao_5 v-if="item.id === 26" :otList="state.otherList"></fengmao_5>
        <qidong6_img2 v-if="item.id === 27"></qidong6_img2>
        <qidong7_img2 v-if="item.id === 28"></qidong7_img2>
        <qidong8_img2 v-if="item.id === 29"></qidong8_img2>
        <qidong9_img2 v-if="item.id === 30"></qidong9_img2>
        <qidong10_img2 v-if="item.id === 31"></qidong10_img2>
      </swiper-slide>
    </swiper>
    <!-- 页码展示 -->
    <pagenum v-if="state.id !== 12" :prevPage="state.activeIndex + 1"></pagenum>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";
import {
  onMounted,
  ref,
  reactive,
  getCurrentInstance,
  nextTick,
  watch,
} from "vue";
import mitts from "../../util/EventBus/index.js";
// * 页码展示
import pagenum from './pagenum/index.vue'
// * 电建智汇城介绍
import introduce_components from "./introduce/index.vue";

// * 总体规划_2
import general_page2 from "./general_page2/index.vue";

// * 启动区
import qidong_4 from "./qidong-4/index.vue";
import qidong6_img2 from "./qidong6_img2/index.vue";
import qidong7_img2 from "./qidong7_img2/index.vue";
import qidong8_img2 from "./qidong8_img2/index.vue";
import qidong9_img2 from "./qidong9_img2/index.vue";
import qidong10_img2 from "./qidong10_img2/index.vue";

// * 总体规划
import general_page from "./general-page/index.vue";
// * 起步区 前三基础
import basic_information from "./basic-information/index.vue";
// * 起步区4
import start_zone_4 from "./start-zone-4/index.vue";
// * 雄县4
import xiongxian_4 from "./xiong-xian-4/index.vue";
// * 雄东4
import xiongdong_4 from "./xiong-dong-4/index.vue";
// * 容城4
import rongcheng_4 from "./rong-cheng-4/index.vue";
// * 容东3
import rongdong_3 from "./rong-dong-3/index.vue";
// * 容西4
import rongxi_4 from "./rong-xi-4/index.vue";
// * 安新4
import anxin_4 from "./anxin-4/index.vue";
// * 寨里4
import zhaili_4 from "./zhaili-4/index.vue";
// * zan gang
import zangang_4 from "./zangang-4/index.vue";
// * 风貌5
import fengmao_5 from "./fengmao-5/index.vue";
// * 两张图片
import image_2 from "./image_2/index.vue";
// * 三张图片
import image_3 from "./image_3/index.vue";
// * 12张图
import image_12 from "./image_12/index.vue";

// * 安新
import anxin6_img from "./anxin6_img/index.vue";
import anxin7_img from "./anxin7_img/index.vue";

// * 动画库
import animationObj from "../../util/GsapFn";
// import { id } from "element-plus/es/locale";
// import mitt from "mitt";
// * 首页transition 事件
const onTransitionEndOne = (swiper: any) => {
  if (state.id === 1) {
    if (swiper.activeIndex === 0) {
      state.firstPageList = [
        {
          id: 30,
        },
        {
          id: 1,
        },
      ];
    }
    if (swiper.activeIndex === 1) {
      state.firstPageList = [
        {
          id: 1,
        },
        {
          id: 31,
        },
      ];
    }
  }
  state.activeIndex = swiper.activeIndex;
};
const modules = [Autoplay];
const gps = getCurrentInstance()!.appContext.config.globalProperties;

let state = reactive({
  firstPageList: [
    {
      id: 30,
    },
    {
      id: 1,
    },
  ],
  pageNum: 1,
  placeName: "",
  id: 1,
  baseList: [
    {
      id: 0,
      title: "",
      number: "",
      wordTitle: "",
      word: "",
      image: "",
    },
  ],
  otherList: {
    title: "",
    wordTitle: "",
    word: "",
    image: "",
  },
  activeIndex: 0,
  numAddFlag: false,
});

let swiperFn: any = null;

// * 组件挂载完成后执行的函数
onMounted(() => {
  // * from nav button 获取对应地方的数据
  mitts.on("detail_list", (listObj: any) => {
    if (state.id === 1) {
      state.firstPageList = [
        {
          id: 30,
        },
        {
          id: 1,
        },
      ];
    }
    // * 回到顶部
    swiperFn.slideTo(0, 1000);
    // * 展示当前模块页数
    state.pageNum = listObj.pageNum;
    // console.log(listObj.pageNum);
    // * 模块id
    state.id = listObj.id;

    // * 模块对应数据
    state.baseList = listObj.baseList;
    // console.log(state.id, state.baseList);
    // * 风貌模块数据
    state.otherList = listObj.otherList;
    // animationObj.basicPage(".basic_info");
    state.activeIndex = 0;
  });
  // * 去到顶部
  mitts.on("top", (flag) => {
    if (flag) {
      if (state.id === 2 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "起步区基本情况",
            wordTitle: "总体空间格局",
            word: "传承中华营城理念，借鉴当代城市规划建设经验，创新未来城市发展模式，顺应自然、尊重规律、平原建城，综合考虑地形地貌、水文条件、生态环境等因素，充分利用北高南低的现状地形，随形就势、精巧布局，形成“北城、中苑、南淀”的总体空间格局。",
            image: gps.$globalImage.qibuqu2,
          },
          {
            id: 1,
            number: "3",
            title: "起步区基本情况",
            wordTitle: "城市功能结构",
            word: "突出绿色、智能、创新，统筹布局生产、生活、生态，形成“五片、三带、多中心”的城市功能结构，建设高质量高水平社会主义现代化城市主城区。",
            image: gps.$globalImage.qibuqu3,
          },
          {
            id: 2,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 3,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 3 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "雄县组团概况",
            wordTitle: "生态空间格局",
            word: "打造蓝绿交织、城淀相映、三河包络的区域蓝绿格局。构建“森林环城，湿地入城”的蓝绿空间格局。县城形成内外双环的生态空间格局。",
            image: gps.$globalImage.xiongxian2,
          },
          {
            id: 1,
            number: "3",
            title: "雄县组团概况",
            wordTitle: "城市空间结构",
            word: "形成“一水弯环、双轴交汇、一城两片”的布局结构。",
            image: gps.$globalImage.xiongxian3,
          },
          {
            id: 4,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 5,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 4 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "容城组团概况",
            wordTitle: "生态空间格局",
            word: "依托现状生态本底，衔接起步区和容东、容西的生态空间，统筹各类生态要素，尊重自然、顺应自然、保护自然，构建宁静、和谐、优美的生态环境，营造绿地分布合理、景观优美、功能齐全的公园绿地系统。",
            image: gps.$globalImage.rongcheng2,
          },
          {
            id: 1,
            number: "3",
            title: "容城组团概况",
            wordTitle: "城市空间结构",
            word: "依托历史肌理与尺度，保留古县城中心放射型空间格局特色，梳理现状道路、绿地、水系、文化等资源，规划构建“一城双轴、东西向自然灵动、南北向规制有序”的总体空间格局。",
            image: gps.$globalImage.rongcheng3,
          },
          {
            id: 8,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 9,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 10,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 11,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 5 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "安新组团概况",
            wordTitle: "生态空间结构",
            word: "顺应自然、随形就势，依托湿地、淀泊、绿廊、水系，构建以“双环水、三绿带”为骨架，环古城生态带、环城林带、河湾生态廊道、湿地淀湾为网络的生态空间结构，恢复安新古城“三面临淀”历史城淀格局，形成“蓝绿交织、淀显城隐、城景应和”的生态空间景观。通过组团内部带状绿地、滨水绿地与点状城市公园绿地，串联城市景观绿带，形成联通的生态系统。",
            image: gps.$globalImage.anxin2,
          },
          {
            id: 1,
            number: "3",
            title: "安新组团概况",
            wordTitle: "城市空间结构",
            word: "尊重安新历史空间格局，科学利用现状条件，改造提升旧城空间环境，构建“一核两翼”、“双环三带”、“三片多心”的空间结构。",
            image: gps.$globalImage.anxin3,
          },
          {
            id: 17,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 18,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 19,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 20,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 6 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "寨里组团概况",
            wordTitle: "生态空间结构",
            word: "形成“两带一环、多廊绿网”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.zhaili2,
          },
          {
            id: 1,
            number: "3",
            title: "寨里组团概况",
            wordTitle: "城市空间结构",
            word: "依托临淀滨河生态本底，利用自然优势，随形就势，构建“一心两带三区”的空间结构。",
            image: gps.$globalImage.zhaili3,
          },
          {
            id: 21,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 22,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 7 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "昝岗组团概况",
            wordTitle: "生态空间结构",
            word: "随形就势，将城市外围的生态资源引入组团内部，统筹水域、风景游憩绿地和公园绿地，构建“四廊、多带”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.zangang2,
          },
          {
            id: 1,
            number: "3",
            title: "昝岗组团概况",
            wordTitle: "城市空间结构",
            word: "遵循平原建城规律，科学利用场地现状，合理布局城市功能，形成“一轴、一环、多片”的空间结构。",
            image: gps.$globalImage.zangang3,
          },
          {
            id: 23,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 24,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 8 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "雄东片区概况",
            wordTitle: "生态空间格局",
            word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
            image: gps.$globalImage.xiongdong2,
          },
          {
            id: 1,
            number: "3",
            title: "雄东片区概况",
            wordTitle: "城市空间结构",
            word: "立足雄县组团空间结构，强化东西轴线的空间主导作用，利用马庄干渠串联城市核心功能，形成“一心、一轴、三带、多组团”的城市空间结构。",
            image: gps.$globalImage.xiongdong3,
          },
          {
            id: 6,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 7,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 9 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "雄东片区概况",
            wordTitle: "生态空间格局",
            word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
            image: gps.$globalImage.xiongdong2,
          },
          {
            id: 12,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 13,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 14,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 10 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "容西片区概况",
            wordTitle: "生态空间结构",
            word: "形成“一横两纵、两环多点”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.rongxi2,
          },
          {
            id: 1,
            number: "3",
            title: "容西片区概况",
            wordTitle: "城市空间结构",
            word: "延续容城组团与起步区的整体空间结构，结合现状场地条件，以片区内生态绿廊为骨架，布局城市公共中心、城市公园等核心功能，以慢行生活环串联五个活力宜居区，形成“一心两园、一环五区”的城市空间结构。",
            image: gps.$globalImage.rongxi3,
          },
          {
            id: 15,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 16,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 11 && state.activeIndex !== 0) {
        state.baseList = [
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            number: "2",
            title: "启动区概述",
            wordTitle: "生态空间结构",
            word: "顺应自然、随形就势，依托淀泊、绿廊、水系，构建以“秀林、绿谷、淀湾”为骨架的生态空间结构。",
            image: gps.$globalImage.qidong2,
          },
          {
            id: 1,
            number: "3",
            title: "启动区概述",
            wordTitle: "城市功能结构",
            word: "延续起步区“北、中、南”功能分区结构，通过南北向中央绿谷串联，集中布局城市核心功能。以“双谷”生态廊道为骨架，以城市绿环串联六个社区，形成“一带一环六社区”的城市空间结构。",
            image: gps.$globalImage.qidong3,
          },
          {
            id: 25,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 26,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 27,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 28,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 29,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 30,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 31,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
    }
    animationObj.basicPage(".basic_info");
  });

  // * 去到底部
  mitts.on("bottom", (flag) => {
    if (flag) {
      if (state.id === 2 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "起步区基本情况",
            wordTitle: "起步区概述",
            word: "起步区作为雄安新区的主城区，肩负着集中承接北京非首都功能疏解的时代重任，承担着打造“雄安质量”样板、培育建设现代化经济体系新引擎的历史使命，在深化改革、扩大开放、创新发展、城市治理、公共服务等方面发挥先行先试和示范引领作用。",
            image: gps.$globalImage.qibuqu1,
          },
          {
            id: 1,
            number: "2",
            title: "起步区基本情况",
            wordTitle: "总体空间格局",
            word: "传承中华营城理念，借鉴当代城市规划建设经验，创新未来城市发展模式，顺应自然、尊重规律、平原建城，综合考虑地形地貌、水文条件、生态环境等因素，充分利用北高南低的现状地形，随形就势、精巧布局，形成“北城、中苑、南淀”的总体空间格局。",
            image: gps.$globalImage.qibuqu2,
          },
          {
            id: 1,
            number: "3",
            title: "起步区基本情况",
            wordTitle: "城市功能结构",
            word: "突出绿色、智能、创新，统筹布局生产、生活、生态，形成“五片、三带、多中心”的城市功能结构，建设高质量高水平社会主义现代化城市主城区。",
            image: gps.$globalImage.qibuqu3,
          },
          {
            id: 2,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 3 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "雄县组团概况",
            wordTitle: "雄县组团基本情况",
            word: "雄县组团作为“五辅”的重要组成部分，县城片区突出改造提升，实现产城融合、创新发展。加强县城更新，提升城市功能；保护古城历史格局，修复历史街巷，彰显人文气息和古城韵味。修复大清河生态环境。加强与雄东片区、昝岗组团的交通联系和景观协调、产业联动，提高城市宜居水平。",
            image: gps.$globalImage.xiongxian1,
          },
          {
            id: 1,
            number: "2",
            title: "雄县组团概况",
            wordTitle: "生态空间格局",
            word: "打造蓝绿交织、城淀相映、三河包络的区域蓝绿格局。构建“森林环城，湿地入城”的蓝绿空间格局。县城形成内外双环的生态空间格局。",
            image: gps.$globalImage.xiongxian2,
          },
          {
            id: 1,
            number: "3",
            title: "雄县组团概况",
            wordTitle: "城市空间结构",
            word: "形成“一水弯环、双轴交汇、一城两片”的布局结构。",
            image: gps.$globalImage.xiongxian3,
          },
          {
            id: 4,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 4 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "容城组团概况",
            wordTitle: "容城组团基本情况",
            word: "容城组团县城片区实施功能再造，与起步区一体化发展。有序推进县城片区更新，完善基础设施，增加公共空间，促进优质公共服务资源的优化配置。强化容城组团县城片区与起步区的空间协调和设施共享，主要城市交通线路、生态廊道与起步区互联互通。",
            image: gps.$globalImage.rongcheng1,
          },
          {
            id: 1,
            number: "2",
            title: "容城组团概况",
            wordTitle: "生态空间格局",
            word: "依托现状生态本底，衔接起步区和容东、容西的生态空间，统筹各类生态要素，尊重自然、顺应自然、保护自然，构建宁静、和谐、优美的生态环境，营造绿地分布合理、景观优美、功能齐全的公园绿地系统。",
            image: gps.$globalImage.rongcheng2,
          },
          {
            id: 1,
            number: "3",
            title: "容城组团概况",
            wordTitle: "城市空间结构",
            word: "依托历史肌理与尺度，保留古县城中心放射型空间格局特色，梳理现状道路、绿地、水系、文化等资源，规划构建“一城双轴、东西向自然灵动、南北向规制有序”的总体空间格局。",
            image: gps.$globalImage.rongcheng3,
          },
          {
            id: 8,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 9,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 10,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 5 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "安新组团概况",
            wordTitle: "安新组团基本情况",
            word: "安新组团作为五个外围组团之一，与起步区共同形成新区的中期发展区，构建功能完善、生态绿色的组团式城市空间格局。",
            image: gps.$globalImage.anxin1,
          },
          {
            id: 1,
            number: "2",
            title: "安新组团概况",
            wordTitle: "生态空间结构",
            word: "顺应自然、随形就势，依托湿地、淀泊、绿廊、水系，构建以“双环水、三绿带”为骨架，环古城生态带、环城林带、河湾生态廊道、湿地淀湾为网络的生态空间结构，恢复安新古城“三面临淀”历史城淀格局，形成“蓝绿交织、淀显城隐、城景应和”的生态空间景观。通过组团内部带状绿地、滨水绿地与点状城市公园绿地，串联城市景观绿带，形成联通的生态系统。",
            image: gps.$globalImage.anxin2,
          },
          {
            id: 1,
            number: "3",
            title: "安新组团概况",
            wordTitle: "城市空间结构",
            word: "尊重安新历史空间格局，科学利用现状条件，改造提升旧城空间环境，构建“一核两翼”、“双环三带”、“三片多心”的空间结构。",
            image: gps.$globalImage.anxin3,
          },
          {
            id: 17,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 18,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 19,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 6 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "寨里组团概况",
            wordTitle: "寨里组团基本情况",
            word: "寨里组团作为雄安新区五个外围组团之一，承担着支撑起步区建设、与起步区第一组团协同发展的使命。",
            image: gps.$globalImage.zhaili1,
          },
          {
            id: 1,
            number: "2",
            title: "寨里组团概况",
            wordTitle: "生态空间结构",
            word: "形成“两带一环、多廊绿网”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.zhaili2,
          },
          {
            id: 1,
            number: "3",
            title: "寨里组团概况",
            wordTitle: "城市空间结构",
            word: "依托临淀滨河生态本底，利用自然优势，随形就势，构建“一心两带三区”的空间结构。",
            image: gps.$globalImage.zhaili3,
          },
          {
            id: 21,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 7 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "昝岗组团概况",
            wordTitle: "昝岗组团基本情况",
            word: "昝岗组团作为新区外围组团和先期建设的区域之一，承担着建设站城一体新区门户、引领淀东片区高质量发展的重要使命。",
            image: gps.$globalImage.zangang1,
          },
          {
            id: 1,
            number: "2",
            title: "昝岗组团概况",
            wordTitle: "生态空间结构",
            word: "随形就势，将城市外围的生态资源引入组团内部，统筹水域、风景游憩绿地和公园绿地，构建“四廊、多带”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.zangang2,
          },
          {
            id: 1,
            number: "3",
            title: "昝岗组团概况",
            wordTitle: "城市空间结构",
            word: "遵循平原建城规律，科学利用场地现状，合理布局城市功能，形成“一轴、一环、多片”的空间结构。",
            image: gps.$globalImage.zangang3,
          },
          {
            id: 23,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 8 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "雄东片区概况",
            wordTitle: "雄东片区基本情况",
            word: "雄东片区作为雄县组团重要组成部分和新区先期建设的区域之一，是保障高铁枢纽周边居民搬迁安居的重点地区，肩负着淀东片区城市功能塑造的重要作用。",
            image: gps.$globalImage.xiongdong1,
          },
          {
            id: 1,
            number: "2",
            title: "雄东片区概况",
            wordTitle: "生态空间格局",
            word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
            image: gps.$globalImage.xiongdong2,
          },
          {
            id: 1,
            number: "3",
            title: "雄东片区概况",
            wordTitle: "城市空间结构",
            word: "立足雄县组团空间结构，强化东西轴线的空间主导作用，利用马庄干渠串联城市核心功能，形成“一心、一轴、三带、多组团”的城市空间结构。",
            image: gps.$globalImage.xiongdong3,
          },
          {
            id: 6,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 9 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "容东片区概况",
            wordTitle: "容东片区基本情况",
            word: "容东片区是以生活居住功能为主的宜居宜业、协调融合、绿色智能的综合性功能区，与新区总体规划对容城组团的功能定位保持一致，引领容城组团发展和功能提升，为起步区、启动区建设提供支撑和配套服务，为探索新区开发建设模式积累经验。",
            image: gps.$globalImage.rongdong1,
          },
          {
            id: 1,
            number: "2",
            title: "雄东片区概况",
            wordTitle: "生态空间格局",
            word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
            image: gps.$globalImage.xiongdong2,
          },
          {
            id: 12,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 13,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 10 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "容西片区概况",
            wordTitle: "容西片区基本情况",
            word: "容西片区作为容城组团的重要组成部分，紧邻起步区，与容城县城、容东片区、起步区一组团协同发展，主要城市交通线路、生态廊道互联互通，服务搬迁安居，具有保障起步区及周边地区建设的重要功能。",
            image: gps.$globalImage.rongxi1,
          },
          {
            id: 1,
            number: "2",
            title: "容西片区概况",
            wordTitle: "生态空间结构",
            word: "形成“一横两纵、两环多点”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
            image: gps.$globalImage.rongxi2,
          },
          {
            id: 1,
            number: "3",
            title: "容西片区概况",
            wordTitle: "城市空间结构",
            word: "延续容城组团与起步区的整体空间结构，结合现状场地条件，以片区内生态绿廊为骨架，布局城市公共中心、城市公园等核心功能，以慢行生活环串联五个活力宜居区，形成“一心两园、一环五区”的城市空间结构。",
            image: gps.$globalImage.rongxi3,
          },
          {
            id: 15,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
      if (state.id === 11 && state.activeIndex !== state.baseList.length - 1) {
        state.baseList = [
          {
            id: 1,
            number: "1",
            title: "启动区概述",
            wordTitle: "启动区基本情况",
            word: "启动区作为雄安新区率先建设重点区域，承担着探索开发建设模式、先行先试政策措施、展现新区雏形等重任。",
            image: gps.$globalImage.qidong1,
          },
          {
            id: 1,
            number: "2",
            title: "启动区概述",
            wordTitle: "生态空间结构",
            word: "顺应自然、随形就势，依托淀泊、绿廊、水系，构建以“秀林、绿谷、淀湾”为骨架的生态空间结构。",
            image: gps.$globalImage.qidong2,
          },
          {
            id: 1,
            number: "3",
            title: "启动区概述",
            wordTitle: "城市功能结构",
            word: "延续起步区“北、中、南”功能分区结构，通过南北向中央绿谷串联，集中布局城市核心功能。以“双谷”生态廊道为骨架，以城市绿环串联六个社区，形成“一带一环六社区”的城市空间结构。",
            image: gps.$globalImage.qidong3,
          },
          {
            id: 25,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 26,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 27,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 28,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 29,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 30,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
          {
            id: 1,
            title: "",
            number: "",
            wordTitle: "",
            word: "",
            image: "",
          },
        ];
      }
    }
    animationObj.basicPage(".basic_info");
  });
});

// * 获取到swiper中的方法
const onSwiper = (swiper: any) => {
  // * to detail_content swiper 函数方法
  mitts.emit("swiper_fn", swiper);
  // * 存储 swiper 方法
  swiperFn = swiper;
};

const onSlideChange = () => {
  // console.log("slide change");
};

let historyId: any[] = [];
let historyIndex: any[] = [];

// * 动画结束 过渡后 动画开始
const onTransitionEnd = (swiper: any) => {
  state.activeIndex = swiper.activeIndex;
  console.log(swiper.activeIndex);
  // console.log(swiper);
  // console.log(state.baseList);

  // * 解决过渡动画 和 按钮动画的重复
  nextTick(() => {
    // * 输入index值
    // * 只保留两次记录
    // * 为指定元素重复执行动画做判断
    historyIndex.push(swiper.activeIndex);
    if (historyIndex.length === 3) {
      historyIndex.shift();
    }
    console.log(historyIndex,'当前下标');
    // * 为不同模块 执行动画做判断
    // * 保留两次记录 两次记录相等就执行过渡动画
    // * 记录不相等 执行点击按钮的初始动画
    historyId.push(state.id);
    console.log(historyId,'模块id');
    if (
      (historyId[0] === historyId[1] && historyIndex[0] !== historyIndex[1]) || swiper.activeIndex === 1
    ) {
      nextTick(()=>{
        animationObj.basicPage(".basic_info");
      })
    }
    if (historyId.length === 2) {
      historyId.shift();
    }
  });

  // * 起步区
  if (state.id === 2) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "起步区基本情况",
          wordTitle: "起步区概述",
          word: "起步区作为雄安新区的主城区，肩负着集中承接北京非首都功能疏解的时代重任，承担着打造“雄安质量”样板、培育建设现代化经济体系新引擎的历史使命，在深化改革 、扩大开放、创新发展、城市治理、公共服务等方面发挥先行先试和示范引领作用。",
          image: gps.$globalImage.qibuqu1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "起步区基本情况",
          wordTitle: "总体空间格局",
          word: "传承中华营城理念，借鉴当代城市规划建设经验，创新未来城市发展模式，顺应自然、尊重规律、平原建城，综合考虑地形地貌、水文条件、生态环境等因素，充分利用北高南低的现状地形，随形就势、精巧布局，形成“北城、中苑、南淀”的总体空间格局。",
          image: gps.$globalImage.qibuqu2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "起步区基本情况",
          wordTitle: "城市功能结构",
          word: "突出绿色、智能、创新，统筹布局生产、生活、生态，形成“五片、三带、多中心”的城市功能结构,建设高质量高水平社会主义现代化城市主城区。",
          image: gps.$globalImage.qibuqu3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 2,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 3,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 雄县
  if (state.id === 3) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "雄县组团概况",
          wordTitle: "雄县组团基本情况",
          word: "雄县组团作为“五辅”的重要组成部分，县城片区突出改造提升，实现产城融合、创新发展。加强县城更新，提升城市功能；保护古城历史格局，修复历史街巷，彰显人文气息和古城韵味。修复大清河生态环境。加强与雄东片区 、昝岗组团的交通联系和景观协调、产业联动，提高城市宜居水平。",
          image: gps.$globalImage.xiongxian1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "雄县组团概况",
          wordTitle: "生态空间格局",
          word: "打造蓝绿交织、城淀相映、三河包络的区域蓝绿格局。构建“森林环城，湿地入城”的蓝绿空间格局。县城形成内 外双环的生态空间格局。",
          image: gps.$globalImage.xiongxian2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "雄县组团概况",
          wordTitle: "城市空间结构",
          word: "形成“一水弯环、双轴交汇、一城两片”的布局结构。",
          image: gps.$globalImage.xiongxian3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 4,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 5,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 容城
  if (state.id === 4) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "容城组团概况",
          wordTitle: "容城组团基本情况",
          word: "容城组团县城片区实施功能再造，与起步区一体化发展。有序推进县城片区更新，完善基础设施，增加公共空间，促进优质公共服务资源的优化配置。强化容城组团县城片区与起步区的空间协调和设施共享，主要城市交通线路、生态廊道与起步区互联互通。",
          image: gps.$globalImage.rongcheng1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "容城组团概况",
          wordTitle: "生态空间格局",
          word: "依托现状生态本底，衔接起步区和容东、容西的生态空间，统筹各类生态要素，尊重自然、顺应自然、保护自然，构建宁静、和谐、优美的生态环境，营造绿地分布合理、景观优美、功能齐全的公园绿地系统。",
          image: gps.$globalImage.rongcheng2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "容城组团概况",
          wordTitle: "城市空间结构",
          word: "依托历史肌理与尺度，保留古县城中心放射型空间格局特色，梳理现状道路、绿地、水系 、文化等  资源 ，规划 构 建“一城双轴、东西向自然灵动、南北向规制有序”的总 体空间格局。",
          image: gps.$globalImage.rongcheng3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 8,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 9,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 5) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 10,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 6) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 11,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 安新
  if (state.id === 5) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "安新组团概况",
          wordTitle: "安新组团基本情况",
          word: "安新组团作为五个外围组团之一，与起步区共同形成新区的中期发展区，构建功能完善、生态绿色的组团式城市空间格局。",
          image: gps.$globalImage.anxin1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "安新组团概况",
          wordTitle: "生态空间结构",
          word: "顺应自然、随形就势，依托湿地、淀泊、绿廊、水系，构建以“双环水、三绿带”为骨架，环古城生态带、环城林带、河湾生态廊道、湿地淀湾为网络的生态空间结构，恢复安新古城“三面临淀”历史城淀格局，形成“蓝绿交织、淀显城隐、城景应和”的生态空间景观。通过组团内部带状绿地、滨水绿地与点状城市公园绿地，串联城市景观绿带，形成联通的生态系统。",
          image: gps.$globalImage.anxin2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "安新组团概况",
          wordTitle: "城市空间结构",
          word: "尊重安新历史空间格局，科学利用现状条件，改造提升旧城 空间环境，构建 “一核两翼”、 “双环三带”、 “三片多心” 的空间结构。",
          image: gps.$globalImage.anxin3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 17,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 18,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 5) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 19,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 6) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 20,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 寨里
  if (state.id === 6) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "寨里组团概况",
          wordTitle: "寨里组团基本情况",
          word: "寨里组团作为雄安新区五个外围组团之一，承担着支撑起步区建设、与起步区第一组团协同发展的使命。",
          image: gps.$globalImage.zhaili1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "寨里组团概况",
          wordTitle: "生态空间结构",
          word: "形成“两带一环、多廊绿网”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
          image: gps.$globalImage.zhaili2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "寨里组团概况",
          wordTitle: "城市空间结构",
          word: "依托临淀滨河生态本底，利用自然优势，随形就势，构建“一心两带三区”的空间结构。",
          image: gps.$globalImage.zhaili3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 21,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 22,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 昝岗
  if (state.id === 7) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "昝岗组团概况",
          wordTitle: "昝岗组团基本情况",
          word: "昝岗组团作为新区外围组团和先期建设的区域之一，承担着建设站城一体新区门户、引领淀东片区高质量发展的重要使命。",
          image: gps.$globalImage.zangang1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "昝岗组团概况",
          wordTitle: "生态空间结构",
          word: "随形就势，将城市外围的生态资源引入组团内部，统筹水域、风景游憩绿地和公园绿地，构建“四廊、多带”的生 态格局，建设多层次、多类型、网络化的复合生态系统。",
          image: gps.$globalImage.zangang2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "昝岗组团概况",
          wordTitle: "城市空间结构",
          word: "遵循平原建城规律，科学利用场地现状，合理布局城市功能，形成“一轴、一环、多片”的空间结构。",
          image: gps.$globalImage.zangang3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 23,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 24,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 雄东
  if (state.id === 8) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "雄东片区概况",
          wordTitle: "雄东片区基本情况",
          word: "雄东片区作为雄县组团重要组成部分和新区先期建设的区域之一，是保障高铁枢纽周边居民搬迁安居的重点地区，肩负着淀东片区城市功能塑造的重要作用。",
          image: gps.$globalImage.xiongdong1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "雄东片区概况",
          wordTitle: "生态空间格局",
          word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
          image: gps.$globalImage.xiongdong2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "雄东片区概况",
          wordTitle: "城市空间结构",
          word: "立足雄县组团空间结构，强化东西轴线的空间主导作用，利用马庄干渠串联城市核心功能，形成“一心、一轴、三带、多组团”的城市空间结构。",
          image: gps.$globalImage.xiongdong3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 6,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 7,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 容东
  if (state.id === 9) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "容东片区概况",
          wordTitle: "容东片区基本情况",
          word: "容东片区是以生活居住功能为主的宜居宜业、协调融合、绿色智能的综合性功能区，与新区总体规划对容城组团的功能定位保持一致，引领容城组团发展和功能提升，为起步区、启动区建设提供支撑和配套服务，为探索新区开发建设模式积累经验。",
          image: gps.$globalImage.rongdong1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "容东片区概况",
          wordTitle: "空间结构",
          word: "尊重平原建城规律，科学利用场地条件，随形就势，构建“一园四区”的空间结构。",
          image: gps.$globalImage.rongdong2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 12,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 13,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 14,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 容西
  if (state.id === 10) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "容西片区概况",
          wordTitle: "容西片区基本情况",
          word: "容西片区作为容城组团的重要组成部分，紧邻起步区，与容城县城、容东片区、起步区一组团协同发展，主要城市交通线路、生态廊道互联互通，服务搬迁安居，具有保障起步区及周边地区建设的重要功能。",
          image: gps.$globalImage.rongxi1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "容西片区概况",
          wordTitle: "生态空间结构",
          word: "形成“一横两纵、两环多点”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
          image: gps.$globalImage.rongxi2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "容西片区概况",
          wordTitle: "城市空间结构",
          word: "延续容城组团与起步区的整体空间结构，结合现状场地 条件，以片区内生态绿廊为骨架，布局城市 公共中心、城市公园等核心功能，以慢行生活环串联五个活力宜居区，形成“一心两园、一环五区”的城市空间结构。",
          image: gps.$globalImage.rongxi3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 15,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 16,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
  // * 启动区
  if (state.id === 11) {
    if (state.activeIndex === 0) {
      state.baseList = [
        {
          id: 1,
          number: "1",
          title: "启动区概述",
          wordTitle: "启动区基本情况",
          word: "启动区作为雄安新区率先建设重点区域，承担着探索开发建设模式、先行先试政策措施、展现新区雏形等重任。",
          image: gps.$globalImage.qidong1,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 1) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "2",
          title: "启动区概述",
          wordTitle: "生态空间结构",
          word: "顺应自然、随形就势，依托淀泊、绿廊、水系，构建以“秀林、绿谷、淀湾”为骨架的生态空间结构。",
          image: gps.$globalImage.qidong2,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 2) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          number: "3",
          title: "启动区概述",
          wordTitle: "城市功能结构",
          word: "延续起步区“北、中、南”功能分区结构，通过南北向中央绿谷串联，集中布局城市核心功能。以“双谷”生态廊道为骨架，以城市绿环串联六个社区，形成“一带一环六社区”的城市空间结构。",
          image: gps.$globalImage.qidong3,
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 3) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 25,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 4) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 26,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 5) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 27,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 6) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 28,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 7) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 29,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 8) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 30,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
    if (state.activeIndex === 9) {
      state.baseList = [
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 1,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
        {
          id: 31,
          title: "",
          number: "",
          wordTitle: "",
          word: "",
          image: "",
        },
      ];
    }
  }
};
</script>
<style scoped lang="less">
@import url("./css/index.css");
</style>
