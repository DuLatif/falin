import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./_.module.scss";
import { Link, useLocation } from "react-router-dom";

export interface IMenuProps {
  icon: React.ReactNode;
  text: string;
  path: string;
}
const Menu: React.FC<IMenuProps> = (props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname.includes(props.path));
  }, [location.pathname]);

  return (
    <Link to={props.path}>
      <MenuItem className={[styles.Menu, isActive && styles.Active].join(" ")}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <Typography fontWeight={"semiBold"} variant="body2">
          {props.text}
        </Typography>
      </MenuItem>
    </Link>
  );
};

export default Menu;
