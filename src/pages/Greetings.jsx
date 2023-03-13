import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Text className="header">Welcome to my website!</Text>
      <Text>Here's some more text.</Text>
      <Button>Hello</Button>
      <Button>Hey!</Button>
    </Wrapper>
  );
};

export default App;
