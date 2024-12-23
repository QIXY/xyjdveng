function draw_modelnetwork() {
var dom = document.getElementById('modelnetwork');
    var myChart = echarts.init(dom,  {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    var option;

    myChart.showLoading();
$.get('./data/network.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 10,
      fontsize:6
    };
  });
  option = {
    // grid.height:'auto',

    color: ['#CD3700', '#8B4500', '#cd6600', '#ff9933', '#58d9f9'],
    tooltip: {},
    legend: [
      {
        x:'left',
        y:'top',
        orient: 'vertical',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Main Character Relationship Diagram',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: false,
        label: {
          position: 'right',
          formatter: '{b}',
        },
        lineStyle: {
          color: 'source',
          curveness: 0.4
        }
      }
    ],
  };
  myChart.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    // window.addEventListener('resize', myChart.resize);
    window.onresize = myChart.resize;
}