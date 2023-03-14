import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import "./Greetings.css";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <div className="header1">
        <Text>WELCOME TO MY WEBSITE!</Text>
      </div>
      <div className="header1">
        <Text>HERE'S MORE TEXT.</Text>
      </div>
      <div className="header">
        <Button>HELLO</Button>
      </div>
      <div className="header">
        <Button>HEY!</Button>
      </div>
    </Wrapper>
  );
};

export default App;
