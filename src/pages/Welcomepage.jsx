import React from "react";
import Header from "../components/Header";
import "./Welcomepage.css";

function Welcomepage() {
  return (
    <div>
      <Header />
      <div className="main">
        <video src="https://www.youtube.com/watch?v=ctjrlRYBH50" />
      </div>
    </div>
  );
}

export default Welcomepage;
