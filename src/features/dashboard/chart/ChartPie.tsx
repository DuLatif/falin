import CodeSnippet from "@/components/CodeSnippet"
import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartPieCode } from "./_code/chart-pie"

const chartData: any = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
}
const ChartPie: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Pie
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="pie" />
      <CodeSnippet code={chartPieCode} infoUrl="https://apexcharts.com/react-chart-demos/pie-charts/" />
    </Card>
  )
}

export default ChartPie
