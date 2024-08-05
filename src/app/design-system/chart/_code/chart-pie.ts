export const chartPieCode = `import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"

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
const App: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Pie
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="pie" />
    </Card>
  )
}

export default App
`
