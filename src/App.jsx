import { useState } from "react";
// import './App.css'
import Header from "./components/Header";
import Concept from "./components/Concept";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import Facilities from "./components/Facilities";
import Interior from "./components/Interior";

function App() {
  return (
    <>
      <Header />
      {/* <Concept /> */}
      <AboutUs />
      <Location />
      <Facilities />
      <Interior />
    </>
  );
}

export default App;
