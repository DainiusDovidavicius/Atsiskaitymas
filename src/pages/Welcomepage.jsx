import React from "react";
import Header from "../components/Header";
import "./Welcomepage.css";
import ggvideo from "./ggvideo.mp4";

function Welcomepage() {
  return (
    <div>
      <Header />
      <div className="content1">
        <h1 className="content2">
          Vilnius, Savanorių pr. 15AViena didžiausių e-sporto arenų Europoje
        </h1>
        <h2 className="content2">Viena didžiausių e-sporto arenų Europoje</h2>
      </div>
      <div className="main">
        <video src={ggvideo} autoPlay loop muted />
      </div>
    </div>
  );
}

export default Welcomepage;
