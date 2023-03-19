export const baseInputName = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup label="Name" placeholder="Full Name" />
    </Box>
  )
}`;

export const baseInputAmount = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Amount"
        placeholder="Donation Amount"
        type="number"
      />
    </Box>
  )
}`;

export const baseInputDisabled = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Disabled Input"
        placeholder="This is value"
        type="text"
        disabled
      />
    </Box>
  )
}`;

export const baseInputReadonly = `import React from "react";
import InputGroup from "@/components/InputGroup";

const App : React.FC = () => {
  return (
    <Box>
      <InputGroup
        label="Readonly input"
        placeholder="This is value"
        readOnly
      />
    </Box>
  )
}`;
