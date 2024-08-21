import "./index.css";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
