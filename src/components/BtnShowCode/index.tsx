import { Button, ButtonProps } from "@mui/material";
import { Code } from "phosphor-react";
import React from "react";

const BtnShowCode: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      size="sm"
      color="inherit"
      variant="text"
      data-shape="icon"
      {...props}
    >
      <Code size={22} weight="bold" />
    </Button>
  );
};

export default BtnShowCode;
