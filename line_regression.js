 function draw_lineregression() {
var dom = document.getElementById("line_regression");

var myChart = echarts.init(dom);
var app = {};

var option;

// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);
const data = [
[1986,9.7],
[1996,8.2],
[1998,8.2],
[1999,9.3],
[2000,9.1],
[2004,6.8],
[2005,9.3],
[2006,6.9],
[2009,9.3],
[2010,9.1],
[2012,6.8],
[2013,9.3],
[2014,9.1],
[2019,8.7]
];
option = {
  dataset: [
    {
      source: data
    },
    {
      transform: {
        type: 'ecStat:regression'
        // 'linear' by default.
        // config: { method: 'linear', formulaOn: 'end'}
      }
    }
  ],
  grid: {
                left: '20%',
            },

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    scale: true,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: 'Year'
  },
  yAxis: {
    scale: true,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: 'Maximum Score'
  },
  series: [
    {
      name: 'scatter',
      type: 'scatter',
      color:'#ff9933',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    },


    {
      name: 'line',
      type: 'line',
      color:'#8B5A00',
      datasetIndex: 1,
      symbolSize: 0.1,
      symbol: 'circle',
      label: { show: true, fontSize: 14 },
      labelLayout: { dx: -20 },
      encode: { label: 2, tooltip: 1 }
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
};