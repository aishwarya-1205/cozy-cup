import React from "react";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
import { Route, Routes } from "react-router-dom";
import DineIn from "./pages/DineIn";
import Takeout from "./pages/Takeout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dine-in" element={<DineIn />} />
        <Route path="/takeout" element={<Takeout />} />
      </Routes>
    </div>
  );
};

export default App;
