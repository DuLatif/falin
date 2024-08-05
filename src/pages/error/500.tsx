import ErrorScreen from "@/ui/sections/ErrorScreen/ErrorScreen"
import React from "react"

export const Error500: React.FC = () => {
  return (
    <>
      <ErrorScreen
        code={500}
        title="Sorry, unexpected error"
        subtitle="We are working on fixing the problem. Be back soon."
      />
    </>
  )
}
