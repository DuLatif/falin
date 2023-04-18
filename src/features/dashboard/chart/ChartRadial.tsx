import CodeSnippet from "@/components/CodeSnippet"
import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartRadialCode } from "./_code/chart-radial"

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
const ChartRadial: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Radial
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="radialBar" />
      <CodeSnippet code={chartRadialCode} />
    </Card>
  )
}

export default ChartRadial
