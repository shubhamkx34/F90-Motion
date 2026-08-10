import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Machine from "./pages/machine";
import Records from "./pages/records";
import Navbar from "./components/common/Navigation/Navbar";
import FullNav from "./components/common/Navigation/FullNav";
import Zig from './components/common/Animation/zig'

const App = () => {
  return (
    <div className="w-screen min-h-screen text-4xl text-white overflow-x-hidden">
      <div className="relative z-50">
        <Navbar />
      </div>
      <Zig>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullnav" element={<FullNav />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </Zig>
    </div>
  );
};

export default App;
