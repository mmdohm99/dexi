import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import { Chart } from "./Chart";
import { Users } from "./Users";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="challenge2" element={<Users />} />
          <Route path="challenge3" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
