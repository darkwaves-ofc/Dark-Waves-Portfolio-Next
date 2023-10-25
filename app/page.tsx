"use client"; // This is a client component 👈🏽

import Home from "../pages/Home/Home";
import "./globals.css";
import "../utils/fontAwesomeSetup.js";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

export default function App() {
  return (
    <div className="w-full position-relative flex-col-ali-center">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
