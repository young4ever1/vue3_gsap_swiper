let numChage = function (flag, oneNum, twoNum, dom, interval, totalTime) {
    // * 是否开启函数
    // * 起始值
    // * 结束值
    // * dom 节点
    // * 消耗总时长
    // * 增长数值
    if (flag) {
        let start = oneNum;
        let num = twoNum;
        let time2 = setInterval(function () {
            start += interval;
            if (start > num) {
                start = num;
                clearInterval(time2);
            }
            dom.value.innerHTML = start;
            // console.log('错误!')
        }, totalTime)
    }
}
export default numChage; 