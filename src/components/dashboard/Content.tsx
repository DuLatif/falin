import React, { PropsWithChildren } from "react"
import { Box } from "@mui/material"
import styles from "./_.module.scss"

const Content: React.FC<PropsWithChildren> = React.forwardRef(({ children }, ref) => {
  return (
    <Box className={styles.Content} component="main" ref={ref}>
      {children}
    </Box>
  )
})

Content.displayName = "Content"
export default Content
