import CodeSnippet from "@/components/CodeSnippet"
import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartAreaCode } from "./_code/chart-area"

const chartData: any = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
}
const ChartArea: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Area
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="area" />
      <CodeSnippet code={chartAreaCode} />
    </Card>
  )
}

export default ChartArea
