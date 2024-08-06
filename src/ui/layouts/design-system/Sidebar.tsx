import Logo from "@/assets/logos/Capsule-Logo.svg"
import { listComponents, listCustomization, listExtraUI, listMenuForms } from "@/constants/design-system"
import { Box, MenuList, Typography, Button } from "@mui/material"
import { Gauge } from "phosphor-react"
import React, { useState } from "react"
import Menu from "./Menu"
import styles from "./_.module.scss"
import { List } from "phosphor-react"
import { combineClasses } from "@/utils/styles"

const Sidebar: React.FC = React.forwardRef((_, ref) => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <Box className={combineClasses([styles.Sidebar, !showSidebar && styles.Hide])} component="aside" ref={ref}>
      <Button
        data-shape="icon"
        variant="text"
        color="primary"
        size="lg"
        sx={{ position: "absolute", top: 8, left: 8, zIndex: 10 }}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <List size={24} weight="bold" style={{ transform: "scale(1.2)" }} />
      </Button>
      <Box className={styles.Header}>
        <img src={Logo} alt="logo capsule" />
        <Typography variant="subtitle1" fontWeight={"semiBold"}>
          Falin UI
        </Typography>
      </Box>
      <MenuList>
        <Menu path="/design-system/home" icon={<Gauge size={26} weight={"bold"} />} text="Home" />
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
