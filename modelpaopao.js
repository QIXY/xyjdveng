function modelpaopao() {
	var dom = document.getElementById("modelpaopao");
var myChart = echarts.init(dom);
var app = {};

var option;



// prettier-ignore
const hours = [
  'Jiangzhou', 'Shuangcha Ridge',  'Wuxing Mountain',  'Shepan Mountain', 'Guanyin Zen Temple',  'Heifeng Mountain', 'Gaolao Village',  'Huangfeng Ridge',  'Liusha River',  'Hezhou',  'Wanshou Mountain',  'Baihu Ridge', 'Blackpine Forest', 'Baoxiang Kingdom', 'Pingding Mountain',  'Lotusflower Cave', 'Wuji Kingdom',  'Hao Mountain',  'Huoyun Cave',  'Black River',  'Chechi Kingdom',  'Chen Village',  'Jinqian Mountain',  'Women’s Kingdom',  'Pipa Cave',  'Fire Mountain', 'Jiyun Mountain',  'Cuiyun Mountain',  'Jisai Kingdom',  'Rubblestones Mountain',  'Thorny Ridge',  'Tongtian River', 'Small Thunderclap Monastery',  'Luotuo Village',  'Zhuzi Kingdom',  'Qilin Mountain',  'Pansi Cave',  'Huanghua Temple',  'Lion Camel Cave',  'Bhikkhu Kingdom',  'Chanlin Temple',  'Endless Cave',  'Miefa Kingdom',  'Chain Cave',  'Fengxian County',  'Yuhua County',  'Hutou Cave',  'Zhujie Mountain',  'Jinping Prefecture',  'Bukin Temple',  'Tongtai Prefecture',  'Ling Mountain'
];
// prettier-ignore
const days = [
    'Difficulties', 'Monsters'
];
// prettier-ignore
const data = [[0, 0, 4], [0, 1, 3], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 2], [0, 8, 2], [0, 9, 1], [0, 10, 2], [0, 11, 1], [0, 12, 1], [0, 13, 2], [0, 14, 1], [0, 15, 1], [0, 16, 2], [0, 17, 1], [0, 18, 3], [0, 19, 1], [0, 20, 3], [0, 21, 1], [0, 22, 3], [0, 23, 4], [0, 24, 1], [0, 25, 1], [0, 26, 1], [0, 27, 1], [0, 28, 1], [0, 29, 1], [0, 30, 1], [0, 31, 3], [0, 32, 2], [0, 33, 1], [0, 34, 2], [0, 35, 1], [0, 36, 1], [0, 37, 1], [0, 38, 4], [0, 39, 2], [0, 40, 2], [0, 41, 1], [0, 42, 1], [0, 43, 1], [0, 44, 1], [0, 45, 1], [0, 46, 1], [0, 47, 1], [0, 48, 2], [0, 49, 1], [0, 50, 1], [0, 51, 1], [1, 0, 0], [1, 1, 6], [1, 2, 1], [1, 3, 2], [1, 4, 2], [1, 5, 5], [1, 6, 3], [1, 7, 9], [1, 8, 7], [1, 9, 4], [1, 10, 8], [1, 11, 5], [1, 12, 3], [1, 13, 11], [1, 14, 8], [1, 15, 12], [1, 16, 10], [1, 17, 5], [1, 18, 15], [1, 19, 1], [1, 20, 18], [1, 21, 6], [1, 22, 15], [1, 23, 20], [1, 24, 5], [1, 25, 4], [1, 26, 6], [1, 27, 5], [1, 28, 6], [1, 29, 5], [1, 30, 5], [1, 31, 18], [1, 32, 10], [1, 33, 5], [1, 34, 8], [1, 35, 8], [1, 36, 11], [1, 37, 12], [1, 38, 25], [1, 39, 12], [1, 40, 9], [1, 41, 5], [1, 42, 0], [1, 43, 5], [1, 44, 4], [1, 45, 7], [1, 46, 5], [1, 47, 13], [1, 48, 14], [1, 49, 5], [1, 50, 0], [1, 51, 4]];
// const data = [[0, 0, 7], [0, 1, 1], [0, 2, 0], [0, 3, 2], [0, 4, 1], [0, 5, 1], [0, 6, 0], [0, 7, 1], [0, 8, 2], [0, 9, 4], [0, 10, 8], [0, 11, 0], [0, 12, 0], [0, 13, 40], [0, 14, 0], [0, 15, 4], [0, 16, 3], [0, 17, 0], [0, 18, 1], [0, 19, 7], [0, 20, 10], [0, 21, 0], [0, 22, 59], [0, 23, 28], [0, 24, 3], [0, 25, 0], [0, 26, 1], [0, 27, 7], [0, 28, 0], [0, 29, 10], [0, 30, 0], [0, 31, 12], [0, 32, 45], [0, 33, 0], [0, 34, 1], [0, 35, 3], [0, 36, 0], [0, 37, 2], [0, 38, 28], [0, 39, 1], [0, 40, 0], [0, 41, 8], [0, 42, 2], [0, 43, 0], [0, 44, 7], [0, 45, 0], [0, 46, 0], [0, 47, 4], [0, 48, 20], [0, 49, 5], [0, 50, 16], [0, 51, 1], [1, 0, 14], [1, 1, 8], [1, 2, 2], [1, 3, 1], [1, 4, 3], [1, 5, 0], [1, 6, 5], [1, 7, 2], [1, 8, 2], [1, 9, 2], [1, 10, 2], [1, 11, 1], [1, 12, 1], [1, 13, 6], [1, 14, 1], [1, 15, 1], [1, 16, 7], [1, 17, 1], [1, 18, 3], [1, 19, 1], [1, 20, 7], [1, 21, 4], [1, 22, 4], [1, 23, 12], [1, 24, 2], [1, 25, 2], [1, 26, 2], [1, 27, 2], [1, 28, 2], [1, 29, 2], [1, 30, 1], [1, 31, 3], [1, 32, 2], [1, 33, 1], [1, 34, 4], [1, 35, 3], [1, 36, 1], [1, 37, 1], [1, 38, 4], [1, 39, 4], [1, 40, 2], [1, 41, 1], [1, 42, 2], [1, 43, 1], [1, 44, 2], [1, 45, 5], [1, 46, 5], [1, 47, 5], [1, 48, 2], [1, 49, 4], [1, 50, 3], [1, 51, 1], [2, 0, 0], [2, 1, 6], [2, 2, 1], [2, 3, 2], [2, 4, 2], [2, 5, 5], [2, 6, 3], [2, 7, 9], [2, 8, 7], [2, 9, 4], [2, 10, 8], [2, 11, 5], [2, 12, 3], [2, 13, 11], [2, 14, 8], [2, 15, 12], [2, 16, 10], [2, 17, 5], [2, 18, 15], [2, 19, 1], [2, 20, 18], [2, 21, 6], [2, 22, 15], [2, 23, 20], [2, 24, 5], [2, 25, 4], [2, 26, 6], [2, 27, 5], [2, 28, 6], [2, 29, 5], [2, 30, 5], [2, 31, 18], [2, 32, 10], [2, 33, 5], [2, 34, 8], [2, 35, 8], [2, 36, 11], [2, 37, 12], [2, 38, 25], [2, 39, 12], [2, 40, 9], [2, 41, 5], [2, 42, 0], [2, 43, 5], [2, 44, 4], [2, 45, 7], [2, 46, 5], [2, 47, 13], [2, 48, 14], [2, 49, 5], [2, 50, 0], [2, 51, 4]];
const title = [];
const singleAxis = [];
const series = [];
days.forEach(function (day, idx) {
  title.push({
    textBaseline: 'middle',
    top: ((idx + 0.5) * 100) / 3 + 10 + '%',
    text: day,
    textStyle:{fontSize:14,fontWeight:'normal',color: '#666666'}
  });
  singleAxis.push({
    left: 80,
    right: 50,
    type: 'category',
    boundaryGap: false,
    data: hours,
    top: (idx * 100) / 3 + 25 + '%',
    height: 100 / 3 - 25 + '%',
    axisLabel: {
      interval: 0,
      color: '#666666',
      fontSize: 12,
      rotate: 45
    }
  });
  series.push({
    singleAxisIndex: idx,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    data: [],
    symbolSize: function (dataItem) {
      return dataItem[1] * 3;
    }
  });
});
data.forEach(function (dataItem) {
  series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
option = {
  // tooltip: {
  //   show: false
  // },
  title: title,
  singleAxis: singleAxis,
  series: series,
  // backgroundColor: '#cd6600',
  color: ['rgb(204, 85, 0)',  '#ff9933', '#fac858',  '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

}