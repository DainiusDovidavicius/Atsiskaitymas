import React, { useState, useEffect } from "react";
import "./Game.css";

const randomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
});

const MovingLetter = ({ letter }) => {
  const [position, setPosition] = useState(randomPosition());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition(randomPosition());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: "absolute", left: position.x, top: position.y }}>
      {letter}
    </div>
  );
};

const MovingLetters = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="moving-letters">
      {letters.split("").map((letter, index) => (
        <MovingLetter key={index} letter={letter} />
      ))}
    </div>
  );
};

export default MovingLetters;
