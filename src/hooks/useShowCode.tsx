import { useState } from "react"

const useShowCode = () => {
  const [showCode, setShowCode] = useState(false)

  const toggle = () => setShowCode(!showCode)

  return { show: showCode, toggle: toggle }
}

export default useShowCode
