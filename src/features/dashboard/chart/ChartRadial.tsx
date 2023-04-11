import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"

const ChartRadial: React.FC = () => {
  const chartData: any = {
    series: [70],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["Cricket"],
    },
  }

  return (
    <Card>
      <Typography variant="subtitle1" mb={1}>
        Chart Radial
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="radialBar" />
    </Card>
  )
}

export default ChartRadial
