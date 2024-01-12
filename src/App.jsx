import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection.jsx";

function App() {
  return (
    <div className="bg-subtle">
      <Navbar companyName="Quick QR" />
      <HeroSection/>
    </div>
  );
}

export default App;
