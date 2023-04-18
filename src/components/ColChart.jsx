import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ColChart = ({ colChartData = {} }) => {
  const data = {
    series: colChartData.series,
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        },
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        categories: colChartData.Xaxis,
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      colors: ['#58CC77', '#54DCDC', '#E1FF30', '#FCC302'],
    },
  }
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      />
    </div>
  )
}

export default ColChart
