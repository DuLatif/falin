import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartColumnCode } from "./_code/chart-column"
import { primary, success, warning } from "@/theme/ts/colors"
import CodeSnippet from "@/ui/components/CodeSnippet"

const chartData: any = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: [primary[400], success[400], warning[400]],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands"
        },
      },
    },
  },
}
const ChartColumn: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Column
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="bar" />
      <CodeSnippet code={chartColumnCode} infoUrl="https://apexcharts.com/react-chart-demos/column-charts/" />
    </Card>
  )
}

export default ChartColumn
