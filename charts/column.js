$(function () { 
  $('#column').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Trending Technologies'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    yAxis: {
      title: {
          text: 'Popularity'
      }
    },
    series: [{
      name: 'JavaScript',
      data: [0,1,2,3,4,5,6,7,8,9,10,11]
    }, {
      name: 'Ruby',
      data: [5, 7, 3,2,8,9,1,4,20,0,11,12]
    }, {
      name: 'React',
      data: [7,5,2,8,10,11,4,3,7,10,5,7]
    }]
  });
});