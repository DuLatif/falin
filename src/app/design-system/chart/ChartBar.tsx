import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { chartBarCode } from "./_code/chart-bar"
import { primary } from "@/theme/ts/colors"
import CodeSnippet from "@/ui/components/CodeSnippet"

const chartData: any = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: [primary[400]],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  },
}
const ChartBar: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Bar
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="bar" />
      <CodeSnippet code={chartBarCode} infoUrl="https://apexcharts.com/react-chart-demos/bar-charts/" />
    </Card>
  )
}

export default ChartBar
