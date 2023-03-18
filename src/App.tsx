import { Routes, Route } from "react-router-dom";
import DashboardRoute from "@/pages/dashboard/route";
import Error404 from "./pages/error/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard/*" element={<DashboardRoute />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
