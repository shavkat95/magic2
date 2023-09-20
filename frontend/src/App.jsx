import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeNew from "/src/components/HomeNew.jsx";
import Footer from "/src/components/Footer.jsx";
import About from "/src/components/About.jsx";
import SinglePlace from "/src/components/SinglePlace.jsx";
import BlogDetails from "/src/components/BlogDetails.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevs" element={<About />} />
        <Route path="/imprint" element={<About />} />
        <Route path="/place/:id" element={<SinglePlace />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
