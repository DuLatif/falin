import { Route, Routes } from "react-router-dom"
import WelcomePage from "./pages/welcome"
import Error404 from "./pages/error/404"
import { Error500 } from "./pages/error/500"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<WelcomePage />} />
        <Route path={"/error/500"} element={<Error500 />} />
        <Route path={"*"} element={<Error404 type="page" />} />
      </Routes>
    </div>
  )
}

export default App
