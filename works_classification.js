 function draw_works_classification() {
var dom = document.getElementById("works_classification");
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    const colors = ['#8B5A00', '#8B4513', '#cd6600', '#FF7F00', '#ff9933', '#FFA500', '#3ba272', '#96BFFF','#9a60b4','#e06343','#6bb6c7', '#8378EA','#37A2DA','#b08fd3','#49baa6','#3b9b64','#6bba49'];
const bgColor = '#ffcc66';
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: 'Domestic',
    itemStyle: {
      color: colors[0]
    },
    children: [
      {
        name: 'Chinese Mainland',
        value:33,
        children: [
          {
            name: 'Movie',
            value:14,
            children: [
              {
                name: 'Havoc in Heaven',
              },
              {
                name: 'Flame Mountain',
              },
              {
                name: 'The Grow ',
              },
              {
                name: 'Monkey Conquers Demons',
              },
              {
                name: 'Spider Web Cave',
              },
              {
                name: 'Ginseng fruit',
              },
              {
                name: 'Iron Fan Princess',
              },
              {
                name: 'Wu Kong and God Erlang',
              },
              {
                name: 'True and False Monkey King',
              },
              {
                name: 'The Monkey King: Hero’s Return',
              },
              {
                name: 'Three Treasures of Journey to the West',
              },
              {
                name: 'Locking Demons and Sealing Magic Towers',
              },
              {
                name: 'Red Boy from Journey to the West',
              },
              {
                name: 'Monkey Subdus the White-Bone Demon',
              }
            ]
          },
          {
            name: 'Series',
            value:18,
            children: [
              {
                name: 'Bright Spring, Pigsy',
              },
              {
                name: 'Lucky Star for Treasure Hunt',
              },
              {
                name: 'Lucky Star for Treasure Hunt 2',
              },
              {
                name: 'Lucky Star for Treasure Hunt 3',
              },
              {
                name: 'Lucky Star Shines on Pigsy',
              },
              {
                name: 'Red Boy',
              },
              {
                name: 'Monkey King',
              },
              {
                name: 'Pigsy Fell from the Sky',
              },
              {
                name: 'Naive faction: Journey to the West',
              },
              {
                name: 'Journey to the West story',
              },
              {
                name: 'Postscript of Journey to the West',
              },
              {
                name: 'Sequel to Journey to the West',
              },
              {
                name: 'Joyful Pigsy',
              },
              {
                name: 'Journey to the West 1986',
              },
              {
                name: 'Journey to the West 1999',
              },
              {
                name: 'Journey to the West series 2010',
              },
              {
                name: 'Journey to the West animated series 2010',
              },
              {
                name: 'Journey to the West 2012',
              },
            ]
          },
          {
            name: 'Opera',
            value:1,
            children: [
              {
                name: 'Flame Mountain',
              }
            ]
          }
        ]
      },
      {
        name: 'HK,China',
        children: [
          {
            name: 'Movie',
            value:5,
            children: [
              {
                name: 'Red Boy'
              },
              {
                name: 'Women’s Country'
              },
              {
                name: 'Spider Web Cave'
              },
              {
                name: 'Iron Fan Princess'
              },
              {
                name: 'Journey to the West'
              },
            ]
          },
          {
            name: 'Series',
            value:2,
            children: [
              {
                name: 'Journey to the West'
              },
              {
                name: 'Monkey King in the Battle between Heaven and Earth'
              }
            ]
          }
        ]
      },
      {
        name: 'Taiwan,China',
        children: [
          {
            name: 'Movie',
            value:2,
            children: [
              {
                name: 'Red Boy and Flame Mountain'
              },
              {
                name: 'Wukong 72 Transformations'
              },
            ]
          }
        ]
      },
      {
        name: 'Mainland/HK,China',
        children: [
          {
            name: 'Movie',
            value:8,
            children: [
              {
                name: 'A Chinese Odyssey 3'
              },
              {
                name: 'A Chinese Odyssey Part Two: Cinderella'
              },
              {
                name: 'A Chinese Odyssey Part 1-Pandora’s Box'
              },
              {
                name: 'Go West to Subdue Demons'
              },
              {
                name: 'Journey to the West: Women’s Country'
              },
              {
                name: 'Journey to the West: Havoc in heaven'
              },
              {
                name: 'Monkey Subdus the White-Bone Demon'
              },
              {
                name: 'Journey to the West: Conquering the Demons'
              },
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Abroad',
    value:10,
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: 'korea',
        value:3,
        children: [
          {
            name: 'Movie',
            children: [
              {
                name: 'Journey to the West Returns'
              }
            ]
          },
          {
            name: 'Series',
            children: [
              {
                name: 'Versatile Sun Wukong'
              },
              {
                name: 'Flower Travels'
              }
            ]
          }
        ]
      },
      {
        name: 'Japan',
        value:7,
        children: [
          {
            name: 'Movie',
            children: [
              {
                name: 'Sun WuKong'
              },
              {
                name: 'Journey to the West 1960'
              },
              {
                name: 'Journey to the West 1993'
              },
              {
                name: 'Journey to the West 2007'
              },
            ]
          },
          {
            name: 'Series',
            children: [
              {
                name: 'Patailo’s Journey to the West'
              },
              {
                name: 'Sun Wukong’s Great Adventure'
              },
              {
                name: 'Journey to the West'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '',//Multinational
    value:3,
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: 'China/Canada',
        // value:1,
        children: [
          {
            name: 'Movie',
            children: [
              {
                name: 'Tang Emperor’s Visit to the Prefecture'
              }
            ]
          }
        ]
      },
      {
        name: 'China/USA',
        // value:1,
        children: [
          {
            name: 'Movie',
            children: [
              {
                name: 'The Forbidden Kingdom'
              }
            ]
          }
        ]
      },
      {
        name: 'USA/Germany/Czech',
        // value:1,
        children: [
          {
            name: 'Series',
            children: [
              {
                name: 'Great Sage Equalling Heaven'
              }
            ]
          }
        ]
      }
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case 'Movie':
            bookScoreId = 0;
            return itemStyle.star5;
          case 'Series':
            bookScoreId = 1;
            return itemStyle.star4;
          case 'Opera':
            bookScoreId = 2;
            return itemStyle.star3;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}
option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: 'sunburst',
      center: ['50%', '45%'],
      data: data,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: 'radial',
        color: bgColor
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2
      },
      levels: [
        {},
        {
          r0: 0,
          r: 60,
          label: {
            rotate: 0,
            fontSize: 10,
          }
        },
        {
          r0: 60,
          r: 135,
          label: {
            rotate: 'radial',
            fontSize: 10,
          }
        },
        {
          r0: 135,
          r: 170,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[2],
            color: 'transparent'
          },
          label: {
            rotate: 'tangential',
            fontSize: 10,
            color: colors[0]
          }
        },
        {
          r0: 170,
          r: 175,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: 'outside',
            fontSize: 10,
            textShadowBlur: 2,
            textShadowColor: '#333'
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  };