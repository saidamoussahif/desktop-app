import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";



function App() {
  return (
    <>
      <Routes>
        <Route className="App" path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
