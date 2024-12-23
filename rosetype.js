function draw_rosetype() {
    var dom = document.getElementById('rosetype');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  legend: {
    show:false,
    orient: 'vertical',
    left: 'right'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {d}%'
    // formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Proportion of Difficulties Encountered by the Team in Different Seasons',
      type: 'pie',
      radius: [50, 200],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      color:['#cd6600', '#FF7F00', '#8B4513','#8B5A00',  '#ff9933', '#FFA500', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49'],
      data: [
        { value: 22, name: 'Spring' },
        { value: 10, name: 'Summer' },
        { value: 22, name: 'Autumn' },
        { value: 14, name: 'Winter' }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
