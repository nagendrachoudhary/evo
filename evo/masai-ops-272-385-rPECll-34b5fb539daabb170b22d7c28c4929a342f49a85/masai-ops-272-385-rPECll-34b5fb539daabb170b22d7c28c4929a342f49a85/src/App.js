import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Dashboard from "./Routes/Dashboard";
export default function App() {
  return <div className="App">
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="*" element={<Home/>}/>
   </Routes >

  </div>;
}
