import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";

import SignupPageComponent from "./pages/signup-page/SignupPageComponent";
import ChartPageComponent from "./pages/chart-page/ChartPageComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignupPageComponent />} />
        <Route path="/chart" element={<ChartPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
