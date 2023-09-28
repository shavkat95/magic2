import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import HomeNew from "/src/components/HomeNew.jsx";
import Footer from "/src/components/Footer.jsx";
import About from "/src/components/About.jsx";
import BlogDetails from "/src/components/BlogDetails.jsx";
import backend_url from "/env.js";
import NavBarScroll from "/src/components/NavBarScroll.jsx";
import axios from "axios";

function App() {

  return (
    <>
      <header>
        <NavBarScroll />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeNew />} />
          <Route path="/search/:search" element={<HomeNew/>} />
          <Route path="/about" element={<About />} />
          <Route path="/webdevs" element={<About />} />
          <Route path="/imprint" element={<About />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          {/* <Route path="/details/:id" element={<Details />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
