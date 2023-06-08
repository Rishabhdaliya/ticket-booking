import React from "react";
import { Route, Routes } from "react-router";
import Booking from "./Components/Booking/Booking";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
