$(document).ready(function(){
cashoutAnalyticsGraph();
function cashoutAnalyticsGraph(){
  $('#loadingCashoutAnalyticsGraph').hide();
  var data = [10, 20, 30, 40, 50];
  var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  var cashoutAG = $('#dailyUsers');

  new Chart(cashoutAG, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Total Cashout',
          data: data,
          backgroundColor: '#4cd137',
          borderColor: '#4cd137',
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false,
          tension: 0,
          pointRadius: 0,
        }
      ],
      labels: labels
    },
    options: {
      hoverMode: 'index',
      stacked: false,
      animation: {
        duration: 1000
      },
      legend: {
        labels: {
          fontColor: '#111'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: '#111'
            },
            gridLines: {
              color: 'rgba(0,0,0,0.2)'
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: '#111'
            },
            gridLines: {
              color: 'rgba(0,0,0,0.2)'
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        position: 'nearest',
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].label+': '+numberWithCommas(tooltipItem.yLabel)
          }
        }
      }
    }
  })
}
	
});
