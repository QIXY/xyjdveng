 function draw_altitudechart() {
    var dom = document.getElementById('altitude_chart');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  color: ['#FFBF00'],
  // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Altitude of the places(km)',
    top: 30,
    left: 60,
    textStyle: {
      fontSize: 18,
      color:'#666666'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  // legend: {
  //   data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  // },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Changan',  'Wuxing Mountain',  'Shepan Mountain', 'Futu Mountain',  'Huangfeng Ridge',  'Liusha River',  'Baoxiang Kingdom', 'Wuji Kingdom',  'Hao Mountain',  'Black River',  'Chechi Kingdom',  'Jinqian Mountain',  'Jisai Kingdom',  'Minor Western Heaven',  'Zhuzi Kingdom',  'Lion Camel Kingdom',  'Bhikkhu Kingdom',  'Miefa Kingdom',  'Fengxian County',  'Thunderclap Monastery'],
      axisLabel: {
        color: '#666666',
        fontSize: 12,
        rotate: 45
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      show:false
    }
  ],
  series: [
    {
      name: 'altitude',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: true,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(204, 85, 0)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [1027, 1917, 2400, 3500, 1200, 780, 1064, 3000, 7444, 1608, 1463, 1000, 380, 5000, 1760, 3220, 6000, 450, 230, 150]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
 }