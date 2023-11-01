<template>
  <div class="nav">
    <div class="nav_left">
      <span @click="backToTop"></span>
      <span @click="prevPage"></span>
      <span @click="nextPage"></span>
      <span @click="gotoBottom"></span>
      <span @click="lightClose"></span>
    </div>
    <div class="nav_right">
      <span
        v-for="(item, index) in state.arealist"
        :key="index"
        :class="areaIndex === index ? 'active' : ''"
        @click="navRightChage(index, item)"
        >{{ item.placeName }}
      </span>
      <div class="secondMenu" ref="menu1">
        <b
          v-for="(item, index) in state.secondListOne"
          :key="index"
          :class="secondIndexOne === index ? 'active' : ''"
          @click="secondChangeOne(index, item)"
          >{{ item.placeName }}</b
        >
      </div>
      <div class="secondMenu" ref="menu2">
        <b
          v-for="(item, index) in state.secondListTwo"
          :key="index"
          :class="secondIndexTwo === index ? 'active' : ''"
          @click="secondChangeTwo(index, item)"
          >{{ item.placeName }}</b
        >
      </div>
      <div class="secondMenu" ref="menu3">
        <b
          v-for="(item, index) in state.secondListThree"
          :key="index"
          :class="secondIndexThree === index ? 'active' : ''"
          @click="secondChangeThree(index, item)"
          >{{ item.placeName }}</b
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  onMounted,
  onBeforeMount,
  reactive,
  ref,
  getCurrentInstance,
} from "vue";
import mitts from "../../util/EventBus/index.js";
import animationObj from "../../util/GsapFn";
import axios from "axios";

const gps = getCurrentInstance()!.appContext.config.globalProperties;

let areaIndex = ref(-1);
let secondIndexOne = ref(-1);
let secondIndexTwo = ref(-1);
let secondIndexThree = ref(-1);
let menu1 = ref();
let menu2 = ref();
let menu3 = ref();

let state = reactive({
  arealist: [
    {
      id: 1,
      placeName: "总体规划",
      pageNum: 2,
      flag: false,
    },
    {
      id: 2,
      flag: false,
      placeName: "起步区",
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "起步区基本情况",
          wordTitle: "起步区概述",
          word: "起步区作为雄安新区的主城区，肩负着集中承接北京非首都功能疏解的时代重任，承担着打造“雄安质量”样板、培育建设现代化经济体系新引擎的历史使命，在深化改革 、扩大开放、创新发展、城市治理、公共服务等方面发挥先行先试和示范引领作用。",
          image: gps.$globalImage.qibuqu1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "起步区基本情况",
          // wordTitle: "总体空间格局",
          // word: "传承中华营城理念，借鉴当代城市规划建设经验，创新未来城市发展模式，顺应自然、尊重规律、平原建城，综合考虑地形地貌、水文条件、生态环境等因素，充分利用北高南低的现状地形，随形就势、精巧布局，形成“北城、中苑、南淀”的总体空间格局。",
          // image: gps.$globalImage.qibuqu2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "起步区基本情况",
          // wordTitle: "城市功能结构",
          // word: "突出绿色、智能、创新，统筹布局生产、生活、生态，形成“五片、三带、多中心”的城市功能结构，建设高质量高水平社会主义现代化城市主城区。",
          // image: gps.$globalImage.qibuqu3,
        },
        {
          // id: 2,
        },
        {
          // id: 3,
        },
      ],
      otherList: {
        title: "起步区风貌",
        wordTitle: "总体城市设计",
        word: "融合城、水、林、田、淀等特色要素，深化“北城、中苑、南淀”的空间格局，形成“一方城、两轴线、五组团、十景苑、百花田、千年林、万顷波”的城市空间意象。",
        image: gps.$globalImage.qibuqu5,
      },
    },
    {
      id: 3,
      placeName: "雄县",
      pageNum: 5,
      flag: false,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "雄县组团概况",
          wordTitle: "雄县组团基本情况",
          word: "雄县组团作为“五辅”的重要组成部分，县城片区突出改造提升，实现产城融合、创新发展。加强县城更新，提升城市功能；保护古城历史格局，修复历史街巷，彰显人文气息和古城韵味。修复大清河生态环境。加强与雄东片区 、昝岗组团的交通联系和景观协调、产业联动，提高城市宜居水平。",
          image: gps.$globalImage.xiongxian1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "雄县组团概况",
          // wordTitle: "生态空间格局",
          // word: "打造蓝绿交织、城淀相映、三河包络的区域蓝绿格局。构建“森林环城，湿地入城”的蓝绿空间格局。县城形成内外双环的生态空间格局。",
          // image: gps.$globalImage.xiongxian2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "雄县组团概况",
          // wordTitle: "城市空间结构",
          // word: "形成“一水弯环、双轴交汇、一城两片”的布局结构。",
          // image: gps.$globalImage.xiongxian3,
        },
        {
          // id: 4,
        },
        {
          // id: 5,
        },
      ],
      otherList: {
        title: "雄县组团风貌",
        wordTitle: "城市设计",
        word: "坚持中西合璧、以中为主、古今交融，弘扬中华优秀传统文化，传承中华文化基因，彰显地域文化特色；突出城绿交融、疏密有度、舒展起伏、清新明亮、活力宜居，营造雄县三水毓秀、一水弯环、水清岸绿的城市风貌。",
        image: gps.$globalImage.xiongxian5,
      },
    },
    {
      id: 4,
      placeName: "容城",
      pageNum: 7,
      flag: false,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "容城组团概况",
          wordTitle: "容城组团基本情况",
          word: "容城组团县城片区实施功能再造，与起步区一体化发展。有序推进县城片区更新，完善基础设施，增加公共空间，促进优质公共服务资源的优化配置。强化容城组团县城片区与起步区的空间协调和设施共享，主要城市交通线路、生态廊道与起步区互联互通。",
          image: gps.$globalImage.rongcheng1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "容城组团概况",
          // wordTitle: "生态空间格局",
          // word: "依托现状生态本底，衔接起步区和容东、容西的生态空间，统筹各类生态要素，尊重自然、顺应自然、保护自然，构建宁静、和谐、优美的生态环境，营造绿地分布合理、景观优美、功能齐全的公园绿地系统。",
          // image: gps.$globalImage.rongcheng2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "容城组团概况",
          // wordTitle: "城市空间结构",
          // word: "依托历史肌理与尺度，保留古县城中心放射型空间格局特色，梳理现状道路、绿地、水系、文化等资源，规划构建“一城双轴、东西向自然灵动、南北向规制有序”的总体空间格局。",
          // image: gps.$globalImage.rongcheng3,
        },
        {
          // id: 8,
        },
        {
          // id: 9,
        },
        {
          // id: 10,
        },
        {
          // id: 11,
        },
      ],
      otherList: {
        title: "容城组团风貌",
        wordTitle: "城市设计",
        word: "坚持新区建设与旧城更新协调发展，有序推进片区有机更新，延续历史文脉，建设城市更新典范城区；坚持以中为主、古今交融，彰显地域文化特色，疏密有度、错落有致，控制高度分区、塑造天际线，引导保护传统街巷格局和肌理，形成中华风范、创新风尚的城市风貌。",
        image: gps.$globalImage.rongcheng5,
      },
    },
    {
      id: 5,
      placeName: "安新",
      pageNum: 7,
      flag: false,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "安新组团概况",
          wordTitle: "安新组团基本情况",
          word: "安新组团作为五个外围组团之一，与起步区共同形成新区的中期发展区，构建功能完善、生态绿色的组团式城市空间格局。",
          image: gps.$globalImage.anxin1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "安新组团概况",
          // wordTitle: "生态空间结构",
          // word: "顺应自然、随形就势，依托湿地、淀泊、绿廊、水系，构建以“双环水、三绿带”为骨架，环古城生态带、环城林带、河湾生态廊道、湿地淀湾为网络的生态空间结构，恢复安新古城“三面临淀”历史城淀格局，形成“蓝绿交织、淀显城隐、城景应和”的生态空间景观。通过组团内部带状绿地、滨水绿地与点状城市公园绿地，串联城市景观绿带，形成联通的生态系统。",
          // image: gps.$globalImage.anxin2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "安新组团概况",
          // wordTitle: "城市空间结构",
          // word: "尊重安新历史空间格局，科学利用现状条件，改造提升旧城空间环境，构建“一核两翼”、“双环三带”、“三片多心”的空间结构。",
          // image: gps.$globalImage.anxin3,
        },
        {
          // id: 17,
        },
        {
          // id: 18,
        },
        {
          // id: 19,
        },
        {
          // id: 20,
        },
      ],
      otherList: {
        title: "安新组团风貌",
        wordTitle: "城市设计",
        word: "坚持中西合璧、以中为主、古今交融，弘扬中华优秀传统文化，保留中华文化基因，突出淀显城隐、城淀融合的城市特色，形成中华风范、淀泊风光、创新风尚的城市风貌。",
        image: gps.$globalImage.anxin5,
      },
    },
    {
      id: 6,
      placeName: "寨里",
      flag: false,
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "寨里组团概况",
          wordTitle: "寨里组团基本情况",
          word: "寨里组团作为雄安新区五个外围组团之一，承担着支撑起步区建设、与起步区第一组团协同发展的使命。",
          image: gps.$globalImage.zhaili1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "寨里组团概况",
          // wordTitle: "生态空间结构",
          // word: "形成“两带一环、多廊绿网”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
          // image: gps.$globalImage.zhaili2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "寨里组团概况",
          // wordTitle: "城市空间结构",
          // word: "依托临淀滨河生态本底，利用自然优势，随形就势，构建“一心两带三区”的空间结构。",
          // image: gps.$globalImage.zhaili3,
        },
        {
          // id: 21,
        },
        {
          // id: 22,
        },
      ],
      otherList: {
        title: "寨里组团风貌",
        wordTitle: "城市设计",
        word: "依托萍河 和 白洋淀 生态环境 优势，利用 周边 开阔 自 然 的田野 风光，塑造寨里 组团 “ 水城 共融、 生态宜居”的城市风貌，坚持中西合璧、以中为主、古今交融、疏密有度、错落有致，弘扬中华优秀传统文化，彰显地域特色。",
        image: gps.$globalImage.zhaili5,
      },
    },
    {
      id: 7,
      placeName: "昝岗",
      flag: false,
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "昝岗组团概况",
          wordTitle: "昝岗组团基本情况",
          word: "昝岗组团作为新区外围组团和先期建设的区域之一，承担着建设站城一体新区门户、引领淀东片区高质量发展的重要使命。",
          image: gps.$globalImage.zangang1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "昝岗组团概况",
          // wordTitle: "生态空间结构",
          // word: "随形就势，将城市外围的生态资源引入组团内部，统筹水域、风景游憩绿地和公园绿地，构建“四廊、多带”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
          // image: gps.$globalImage.zangang2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "昝岗组团概况",
          // wordTitle: "城市空间结构",
          // word: "遵循平原建城规律，科学利用场地现状，合理布局城市功能，形成“一轴、一环、多片”的空间结构。",
          // image: gps.$globalImage.zangang3,
        },
        {
          // id: 23,
        },
        {
          // id: 24,
        },
      ],
      otherList: {
        title: "昝岗组团风貌",
        wordTitle: "城市设计",
        word: "坚持中西合璧、以中为主、古今交融，传承中华文化基因，彰显地域文化特色，运用现代建筑设计手法，塑造突出新区门户形象的城市风貌，形成体现“创新引领、多元包容、传承文化、面向未来”的整体风貌意象。",
        image: gps.$globalImage.zangang5,
      },
    },
  ],
  secondListOne: [
    {
      id: 8,
      placeName: "雄东",
      flag: false,
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "雄东片区概况",
          wordTitle: "雄东片区基本情况",
          word: "雄东片区作为雄县组团重要组成部分和新区先期建设的区域之一，是保障高铁枢纽周边居民搬迁安居的重点地区，肩负着淀东片区城市功能塑造的重要作用。",
          image: gps.$globalImage.xiongdong1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "雄东片区概况",
          // wordTitle: "生态空间格局",
          // word: "依托生态本底，以绿心为引领、绿带为骨架、绿廊为基底，构建自然灵动、融合放射的生态空间格局，构建由组团公园、社区公园及邻里游园组成的公园绿地体系。",
          // image: gps.$globalImage.xiongdong2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "雄东片区概况",
          // wordTitle: "城市空间结构",
          // word: "立足雄县组团空间结构，强化东西轴线的空间主导作用，利用马庄干渠串联城市核心功能，形成“一心、一轴、三带、多组团”的城市空间结构。",
          // image: gps.$globalImage.xiongdong3,
        },
        {
          // id: 6,
        },
        {
          // id: 7,
        },
      ],
      otherList: {
        title: "雄东片区风貌",
        wordTitle: "城市设计",
        word: "坚持中西合璧、以中为主、古今交融，依托现状自然景观，深入挖掘雄州宋辽边关文化内涵，汲取提炼传统建筑特色，运用现代建筑设计手法，塑造“林田环绕、古今交融、人文科创融合”的整体风貌意向。",
        image: gps.$globalImage.xiongdong5,
      },
    },
  ],
  secondListTwo: [
    {
      id: 9,
      placeName: "容东",
      flag: false,
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "容东片区概况",
          wordTitle: "容东片区基本情况",
          word: "容东片区是以生活居住功能为主的宜居宜业、协调融合、绿色智能的综合性功能区，与新区总体规划对容城组团的功能定位保持一致，引领容城组团发展和功能提升，为起步区、启动区建设提供支撑和配套服务，为探索新区开发建设模式积累经验。",
          image: gps.$globalImage.rongdong1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "容东片区概况",
          // wordTitle: "空间结构",
          // word: "尊重平原建城规律，科学利用场地条件，随形就势，构建“一园四区”的空间结构。",
          // image: gps.$globalImage.rongdong2,
        },
        {
          // id: 12,
        },
        {
          // id: 13,
        },
        {
          // id: 14,
        },
      ],
      otherList: {
        title: "容东片区风貌",
        wordTitle: "城市设计",
        word: "坚持中西合璧、以中为主、古今交融，弘扬中华优秀传统文化，保留中华文化基因，彰显地域文化特色，形成体现历史传承和当代创新的城市风貌。",
        image: gps.$globalImage.rongdong5,
      },
    },
    {
      id: 10,
      placeName: "容西",
      flag: false,
      pageNum: 5,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "容西片区概况",
          wordTitle: "容西片区基本情况",
          word: "容西片区作为容城组团的重要组成部分，紧邻起步区，与容城县城、容东片区、起步区一组团协同发展，主要城市交通线路、生态廊道互联互通，服务搬迁安居，具有保障起步区及周边地区建设的重要功能。",
          image: gps.$globalImage.rongxi1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "容西片区概况",
          // wordTitle: "生态空间结构",
          // word: "形成“一横两纵、两环多点”的生态格局，建设多层次、多类型、网络化的复合生态系统。",
          // image: gps.$globalImage.rongxi2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "容西片区概况",
          // wordTitle: "城市空间结构",
          // word: "延续容城组团与起步区的整体空间结构，结合现状场地条件，以片区内生态绿廊为骨架，布局城市公共中心、城市公园等核心功能，以慢行生活环串联五个活力宜居区，形成“一心两园、一环五区”的城市空间结构。",
          // image: gps.$globalImage.rongxi3,
        },
        {
          // id: 15,
        },
        {
          // id: 16,
        },
      ],
      otherList: {
        title: "容西片区风貌",
        wordTitle: "城市设计",
        word: "依托现状田园特色和紧邻起步区一组团的资源优势，结合生活居住主导功能，形成容西片区“绿色创意、休闲宜居”的城市风貌，坚持中西合璧、以中为主、古今交融、疏密有度、错落有致，弘扬中华优秀传统文化，彰显地域特色。",
        image: gps.$globalImage.rongxi5,
      },
    },
    {
      id: 12,
      placeName: "雄安·电建智汇城",
      flag: false,
    },
  ],
  secondListThree: [
    {
      id: 11,
      placeName: "启动区",
      flag: false,
      pageNum: 9,
      baseList: [
        {
          id: 1,
          number: "1",
          title: "启动区概述",
          wordTitle: "启动区基本情况",
          word: "启动区作为雄安新区率先建设重点区域，承担着探索开发建设模式、先行先试政策措施、展现新区雏形等重任。",
          image: gps.$globalImage.qidong1,
        },
        {
          // id: 1,
          // number: "2",
          // title: "启动区概述",
          // wordTitle: "生态空间结构",
          // word: "顺应自然、随形就势，依托淀泊、绿廊、水系，构建以“秀林、绿谷、淀湾”为骨架的生态空间结构。",
          // image: gps.$globalImage.qidong2,
        },
        {
          // id: 1,
          // number: "3",
          // title: "启动区概述",
          // wordTitle: "城市功能结构",
          // word: "延续起步区“北、中、南”功能分区结构，通过南北向中央绿谷串联，集中布局城市核心功能。以“双谷”生态廊道为骨架，以城市绿环串联六个社区，形成“一带一环六社区”的城市空间结构。",
          // image: gps.$globalImage.qidong3,
        },
        {
          // id: 25,
        },
        {
          // id: 26,
        },
        {
          // id: 27
        },
        {},
        {},
        {},
        {},
      ],
      otherList: {
        title: "启动区风貌",
        wordTitle: "总体城市设计",
        word: "坚持现代化城市建设和中国特色相结合，以创造历史、追求艺术的精神，形成鲜明的新时代中国特色风貌样板。坚持中西合璧、以中为主、古今交融，疏密有度、错落有致，控制高度分区、塑造天际线、保护乡愁记忆、引导城市色彩和城市肌理、建设立体城市，形成中华风范、淀泊风光、创新风尚的城市风貌。",
        image: gps.$globalImage.qidong5,
      },
    },
  ],
});
let lightClose = () => {
  axios.get(`http://127.0.0.1:8080/switch/off`).then((res) => {
    console.log(res);
  });
};
// * 灯光api ----- test
let api = (id: number) => {
  if (id === 0) {
    axios.get(`http://127.0.0.1:8080/switch/on`).then((res) => {
      console.log(res);
    });
  } else {
    axios.get(`http://127.0.0.1:8080/switch/${id}`).then((res) => {
      console.log(res);
    });
  }
};
// * 存储页面长度
let backToTopNum: number | null = 2;
// const historyId: any[] = [];

// * 右侧导航切换
let navRightChage = (index: number, item: any) => {
  api(index);
  // * 控制下标
  areaIndex.value = index;
  secondIndexOne.value = -1;
  secondIndexTwo.value = -1;
  secondIndexThree.value = -1;

  if (index === 2) {
    menu1.value.style.opacity = 1;
  } else {
    menu1.value.style.opacity = 0;
    secondIndexOne.value = -1;
  }
  if (index === 3) {
    menu2.value.style.opacity = 1;
  } else {
    menu2.value.style.opacity = 0;
    secondIndexTwo.value = -1;
  }

  if (index === 1) {
    menu3.value.style.opacity = 1;
  } else {
    menu3.value.style.opacity = 0;
    secondIndexThree.value = -1;
  }
  // * 兄弟传参 detail_content
  mitts.emit("detail_list", item);
  backToTopNum = item.pageNum;

  // * 解决一级标题重读动画
  if (item.flag === false) {
    if (item.id !== 1) {
      setTimeout(() => {
        animationObj.basicPage(".basic_info");
        item.flag = true;
      });
    }
    state.arealist.map((i) => {
      if (i.id !== item.id) {
        i.flag = false;
      }
    });
    state.secondListOne.map((i) => {
      return (i.flag = false);
    });
    state.secondListTwo.map((i) => {
      return (i.flag = false);
    });
    state.secondListThree.map((i) => {
      return (i.flag = false);
    });
  }

  // console.log(state.arealist);
};
// * 第一个二级菜单
let secondChangeOne = (index: number, item: any) => {
  areaIndex.value = -1;
  secondIndexOne.value = index;
  mitts.emit("detail_list", item);
  backToTopNum = item.pageNum;
  if (item.flag === false) {
    setTimeout(() => {
      animationObj.basicPage(".basic_info");
      item.flag = true;
    });
    state.secondListOne.map((i) => {
      if (i.id !== item.id) {
        i.flag = false;
      }
    });
    state.arealist.map((i) => {
      return (i.flag = false);
    });
    state.secondListTwo.map((i) => {
      return (i.flag = false);
    });
    state.secondListThree.map((i) => {
      return (i.flag = false);
    });
  }
  // setTimeout(() => {
  //   animationObj.basicPage(".basic_info");
  // });
};

// * 第二个二级 菜单
let secondChangeTwo = (index: number, item: any) => {
  areaIndex.value = -1;
  secondIndexTwo.value = index;
  mitts.emit("detail_list", item);
  backToTopNum = item.pageNum;
  if (item.flag === false) {
    if (item.id !== 12) {
      setTimeout(() => {
        animationObj.basicPage(".basic_info");
      });
    }
    item.flag = true;
    state.secondListTwo.map((i) => {
      if (i.id !== item.id) {
        i.flag = false;
      }
    });
    state.arealist.map((i) => {
      return (i.flag = false);
    });
    state.secondListOne.map((i) => {
      return (i.flag = false);
    });
    state.secondListThree.map((i) => {
      return (i.flag = false);
    });
  }
  console.log(state.secondListTwo);
  // setTimeout(() => {
  //   animationObj.basicPage(".basic_info");
  // });
};

// * 启动区菜单
let secondChangeThree = (index: number, item: any) => {
  areaIndex.value = -1;
  secondIndexThree.value = index;
  mitts.emit("detail_list", item);
  backToTopNum = item.pageNum;
  if (item.flag === false) {
    setTimeout(() => {
      animationObj.basicPage(".basic_info");
      item.flag = true;
    });
    state.secondListThree.map((i) => {
      if (i.id !== item.id) {
        i.flag = false;
      }
    });
    state.arealist.map((i) => {
      return (i.flag = false);
    });
    state.secondListOne.map((i) => {
      return (i.flag = false);
    });
    state.secondListTwo.map((i) => {
      return (i.flag = false);
    });
  }
};

// * 获取swiper的方法
let swiper_fn: any = null;
onMounted(() => {
  // alert('123')
  // * swiper
  mitts.on("swiper_fn", (swiper: any) => {
    // console.log(swiper);
    swiper_fn = swiper;
  });
});

// * 上一页
let prevPage = () => {
  swiper_fn.slidePrev(800);
};
// * 下一页
let nextPage = () => {
  swiper_fn.slideNext(800);
};
// * 回到顶部
let backToTop = () => {
  swiper_fn.slideTo(0, 1200);
  mitts.emit("top", true);
};
// * 回到底部
let gotoBottom = () => {
  swiper_fn.slideTo(backToTopNum, 1200);
  mitts.emit("bottom", true);
};
</script>
<style scoped lang="less">
@import url("./css/index.css");
</style>
