function draw_trainpie() {
	var dom = document.getElementById('train_pie');
    var myChart = echarts.init(dom,  {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  series: [
    {
      name: 'Proportion of Monsters from Various Backgrounds',
      type: 'pie',
      radius: ['50%', '85%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      // label: {
      //   show: true,
      //   formatter(param) {
      //     // correct the percentage
      //     return param.name + ' (' + param.percent * 2 + '%)';
      //   },
      // },
      emphasis: {
        label: {
          show: true,
          fontSize: 32,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 66.7, name: 'no background' },
        { value: 18.5, name: 'Ling Mountain background' },
        { value: 5.6, name: 'Taoist background' },
        { value: 3.7, name: 'immortal background' },
        { value: 3.7, name: 'mount descended to human world' },
        { value: 1.9, name: 'pet descended to human world' }
      ]
    }
  ],
  color:['#8B5A00', '#8B4513', '#cd6600', '#FF7F00', '#ff9933', '#FFA500', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49']
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}