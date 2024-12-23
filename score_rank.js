 function draw_score_rank() {
var dom = document.getElementById("score_rank");
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  dataset: {
    source: [
      ['score', '分数', 'product'],
      [9, 9, 'The Moonlight Treasure Box of Journey to the West(Movie)1995'],
      [9.1, 9.1, 'Sequel to Journey to the West(Series)2000'],
      [9.1, 9.1, 'Journey to the West(Series)2010'],
      [9.1, 9.1, 'Journey to the West story(Series)2014'],
      [9.2, 9.2, 'Golden Monkey Conquers Demons(Movie)1985'],
      [9.2, 9.2, 'A Chinese Odyssey Part Two Cinderella(Movie)1995'],
      [9.3, 9.3, 'Journey to the West(Series)1999'],
      [9.3, 9.3, 'Lucky Star for Treasure Hunt(Series)2005'],
      [9.3, 9.3, 'Lucky Star for Treasure Hunt 2(Series)2009'],
      [9.3, 9.3, 'Lucky Star for Treasure Hunt 3(Series)2013'],
      [9.4, 9.4, 'Havoc in heaven(Movie)1961'],
      [9.7, 9.7, 'Journey to the West(Series)1986']
    ]
  },
  grid: { containLabel: true },
  xAxis: { 
    name: '',
    axisLabel:{
      show:true,
      color:"#363636",
      fontSize: 14
    } },
  yAxis: { 
    type: 'category',
    axisLabel:{
      show:true,
      color:"#363636",
      fontSize: 14
    }  },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    type: 'piecewise',
    min: 9.0,
    max: 10.0,
    text: ['10.0 points', '9.0 points'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#FFA500', '#ff9933', '#8B5A00']
      // color: ['#00BFFF', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      barWidth:18,
      encode: {
        // Map the "amount" column to X axis.
        x: '分数',
        // Map the "product" column to Y axis
        y: 'product'
      },
      label: {
        show: true,
        position: 'right',
      }
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

 };