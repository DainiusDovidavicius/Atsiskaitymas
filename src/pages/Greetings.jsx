import React from "react";
import Header from "../components/Header";
import Text from "./Text";
import Button from "./Button.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Text className="header">Welcome to my website!</Text>
      <Text>Here's some more text.</Text>
      <Button>Hello</Button>
      <Button>Hey!</Button>
    </div>
  );
};

export default App;
