import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Machine from "./pages/machine";
import Records from "./pages/records";
import Telemetry from "./pages/telemetry"
import Navbar from "./components/common/Navigation/Navbar";
import FullNav from "./components/common/Navigation/FullNav";
import Zig from './components/common/Animation/zig'

const App = () => {
  return (
    <div className="w-screen min-h-screen text-4xl text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>
      <Zig>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullnav" element={<FullNav />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/records" element={<Records />} />
          <Route path="/telemetry" element={<Telemetry />} />
        </Routes>
      </Zig>
    </div>
  );
};

export default App;
