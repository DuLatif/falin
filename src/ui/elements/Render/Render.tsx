import React, { PropsWithChildren } from "react"

interface IRenderProps extends PropsWithChildren {
  in: boolean
}
const Render: React.FC<IRenderProps> = (props) => {
  if (props.in) return <>{props.children}</>
  return <></>
}

export default Render
