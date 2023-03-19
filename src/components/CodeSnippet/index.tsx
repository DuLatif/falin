import useShowCode from "@/hooks/useShowCode";
import { neutral } from "@/theme/colors";
import { Collapse } from "@mui/material";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BtnShowCode from "../BtnShowCode";

const CodeSnippet: React.FC<{ code: string }> = ({ code }) => {
  const inputState = useShowCode();

  return (
    <>
      <BtnShowCode onClick={inputState.toggle} />
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
    </>
  );
};

export default CodeSnippet;
