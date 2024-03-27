import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NewRequests from "./newRequests";
import NewDataInsertion from "./newDataInsertion";
import Maintenanceinfo from "./maintenanceinfo";
import Inventory from "./inventory";

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
      {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/newrequests" element={<NewRequests/>}></Route>
            <Route path="/newdatainsertion" element={<NewDataInsertion/>}></Route>
            <Route path="/maintenanceinfo/:id" element={<Maintenanceinfo/>}></Route>
            <Route path="/maintenanceinfo" element={<Maintenanceinfo/>}></Route>
            <Route path="/inventory" element={<Inventory/>}></Route>
        </Routes>
        </BrowserRouter>
    
  );
};

export default Routers;
