import React from "react";
import "./index.css";
import { ManualParallax } from "../src/components/manualParallax/ManualParallax";
import { Agricultero } from "../src/pages/Agricultero";
import { Movie } from "../src/pages/Movie";
import { Asistance } from "../src/pages/Asistance";
import { Audio } from "../src/pages/Audio";
import { Timer } from "../src/pages/Timer";
import { BulkSales } from "../src/pages/Bulk";
import { Portal } from "../src/pages/PortalCautivo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="cont">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManualParallax></ManualParallax>}></Route>
          <Route
            path="/agricultero"
            element={<Agricultero></Agricultero>}
          ></Route>
          <Route path="/movie" element={<Movie></Movie>}></Route>
          <Route path="/asistance" element={<Asistance></Asistance>}></Route>
          <Route path="/audio" element={<Audio></Audio>}></Route>
          <Route path="/timer" element={<Timer></Timer>}></Route>
          <Route path="/bulkSales" element={<BulkSales></BulkSales>}></Route>
          <Route path="/portalCautivo" element={<Portal></Portal>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
