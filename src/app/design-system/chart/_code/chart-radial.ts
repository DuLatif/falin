export const chartRadialCode = `import { Card, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"

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
const App: React.FC = () => {
  return (
    <Card>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        Chart Radial
      </Typography>
      <Chart options={chartData.options} series={chartData.series} type="radialBar" />
    </Card>
  )
}

export default App
`
