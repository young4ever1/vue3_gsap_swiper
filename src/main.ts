import { createApp } from "vue";
import App from "./App.vue";
import "./util/ResizeScreen/index.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import globalImage from "./util/ImageLoad/index.js";
// import './util/Echarts/echarts.min.js'
// console.log(globalImage);
const app = createApp(App);

// * 全局图片
app.config.globalProperties.$globalImage = globalImage

app.use(ElementPlus);
app.mount("#app");
