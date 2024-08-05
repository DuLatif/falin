import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartLineCode } from "./_code/chart-line"
import { primary } from "@/theme/colors"
import CodeSnippet from "@/ui/components/CodeSnippet"

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
    colors: [primary[400]],
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
        colors: [primary[50], primary[25]], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
  },
}
const ChartLine: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Line
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="line" />
      <CodeSnippet code={chartLineCode} infoUrl="https://apexcharts.com/react-chart-demos/line-charts/" />
    </Card>
  )
}

export default ChartLine
