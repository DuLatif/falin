import CodeSnippet from "@/components/CodeSnippet"
import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartRadialCode } from "./_code/chart-radial"
import { primary } from "@/theme/colors"

const chartData: any = {
  series: [70],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    colors: [primary[400]],
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
      <CodeSnippet code={chartRadialCode} infoUrl="https://apexcharts.com/react-chart-demos/radialbar-charts/" />
    </Card>
  )
}

export default ChartRadial
