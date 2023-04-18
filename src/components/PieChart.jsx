import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart = ({ pieChartData = {} }) => {
  const data = {
    series: pieChartData.series,
    options: {
      chart: {
        type: 'donut',
      },
      labels: pieChartData.labels,
      colors: ['#58CC77', '#54DCDC', '#E1FF30', '#FCC302'],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 2600,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
              fontWeight: 600,
              formatter: function(seriesName, opts) {
                return ["\t", seriesName, " - ", opts.w.globals.series[opts.seriesIndex],"%"]
            }
            },
          },
        },
      ],
    },
  }
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
        height={350}
      />
    </div>
  )
}

export default PieChart
