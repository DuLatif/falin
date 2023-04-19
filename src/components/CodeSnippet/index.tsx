import useShowCode from "@/hooks/useShowCode"
import { neutral } from "@/theme/colors"
import { Box, Button, Collapse } from "@mui/material"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import BtnShowCode from "./BtnShowCode"
import { Info } from "phosphor-react"
import Render from "../Render/Render"

const CodeSnippet: React.FC<{ code: string; infoUrl?: string }> = React.forwardRef(({ code, infoUrl }, ref) => {
  const inputState = useShowCode()

  return (
    <Box mt={1} ref={ref}>
      <BtnShowCode onClick={inputState.toggle} />
      <Render in={!!infoUrl}>
        <a href={infoUrl} target="_blank" rel="noreferrer">
          <Button size="sm" color="inherit" variant="text" data-shape="icon" sx={{ ml: 1 }}>
            <Info size={22} weight="bold" />
          </Button>
        </a>
      </Render>
      <Collapse in={inputState.show}>
        <SyntaxHighlighter
          customStyle={{
            width: "100%",
            border: `1px solid ${neutral[300]}`,
            borderRadius: "8px",
            maxHeight: "250px",
            fontSize: "12px",
          }}
          showLineNumbers
          language="tsx"
          wrapLines
          style={materialLight}
        >
          {code}
        </SyntaxHighlighter>
      </Collapse>
    </Box>
  )
})

CodeSnippet.displayName = "CodeSnippet"
export default CodeSnippet
