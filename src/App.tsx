import { Routes, Route } from "react-router-dom"
import DashboardRoute from "@/pages/design-system/route"
import Error404 from "./pages/error/404"
import { Error500 } from "./pages/error/500"
import WelcomePage from "./pages"
import LoadingPage from "./ui/views/LoadingPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<WelcomePage />} />
        <Route path="/design-system/*" element={<DashboardRoute />} />
        <Route path={"/error/500"} element={<Error500 />} />
        <Route path={"/loading"} element={<LoadingPage />} />
        <Route path={"*"} element={<Error404 type="page" />} />
      </Routes>
    </div>
  )
}

export default App
