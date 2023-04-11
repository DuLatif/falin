import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"

const ChartLine: React.FC = () => {
  const chartData: any = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
  }

  return (
    <Card>
      <Typography variant="subtitle1" mb={1}>
        Chart Line
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="line" />
    </Card>
  )
}

export default ChartLine
