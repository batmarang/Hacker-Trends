Highcharts.theme = {
  colors: ['#50B432','#ED561B','#058DC7', '#DDDF00', '#24CBE5', '#64E572', 
           '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
    backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(240, 240, 255)']
      ]
    },
  },
  title: {
    style: {
      color: '#000',
      font: 'bold 16px Verdana, sans-serif'
    }
  },
  subtitle: {
    style: {
      color: '#666666',
      font: 'bold 12px Verdana, sans-serif'
    }
  },

  legend: {
    itemStyle: {
      font: '9pt Verdana, sans-serif',
      color: 'black'
    },
    itemHoverStyle:{
      color: 'gray'
    }   
  }
};

Highcharts.setOptions(Highcharts.theme);