import React, { PropsWithChildren } from "react"
import { Card, Typography } from "@mui/material"

export interface ICardSectionProps extends PropsWithChildren {
  title: string
}
const CardSection: React.FC<ICardSectionProps> = ({ children, title }) => {
  return (
    <Card sx={{ p: 5 }}>
      <Typography variant="subtitle1" mb={1} fontWeight={"semiBold"}>
        {title}
      </Typography>
      {children}
    </Card>
  )
}

export default CardSection
