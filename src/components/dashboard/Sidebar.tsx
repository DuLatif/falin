import Logo from "@/assets/logos/Capsule-Logo-Text.svg"
import { listComponents, listCustomization, listExtraUI, listMenuForms } from "@/constants/dashboard"
import { Box, MenuList, Typography } from "@mui/material"
import { Gauge } from "phosphor-react"
import React from "react"
import Menu from "./Menu"
import styles from "./_.module.scss"

const Sidebar: React.FC = React.forwardRef((_, ref) => {
  return (
    <Box className={styles.Sidebar} component="aside" ref={ref}>
      <Box className={styles.Header}>
        <img src={Logo} alt="logo capsule" />
      </Box>
      <MenuList>
        <Menu path="/dashboard/home" icon={<Gauge size={26} weight={"bold"} />} text="Home" />
        <Typography className={styles.TitleMenu}>Customization</Typography>
        {listCustomization
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, i) => (
            <Menu key={i} {...item} />
          ))}
        <Typography className={styles.TitleMenu}>Forms</Typography>
        {listMenuForms
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, i) => (
            <Menu key={i} {...item} />
          ))}
        <Typography className={styles.TitleMenu}>Components</Typography>
        {listComponents
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, i) => (
            <Menu key={i} {...item} />
          ))}
        <Typography className={styles.TitleMenu}>Extra UI</Typography>
        {listExtraUI
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, i) => (
            <Menu key={i} {...item} />
          ))}
      </MenuList>
    </Box>
  )
})
Sidebar.displayName = "Sidebar"
export default Sidebar
