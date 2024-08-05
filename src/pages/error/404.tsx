import ErrorScreen, { TErrorScreen } from "@/ui/sections/ErrorScreen/ErrorScreen"
import React from "react"

interface IError404Props {
  type?: TErrorScreen
}
const Error404: React.FC<IError404Props> = ({ type = "screen" }) => {
  return (
    <>
      <ErrorScreen
        code={404}
        type={type}
        title="Something missing"
        subtitle="We can't seem to find page you're looking"
      />
    </>
  )
}

export default Error404
