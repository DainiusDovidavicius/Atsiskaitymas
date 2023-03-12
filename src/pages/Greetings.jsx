import React from "react";
import Header from "../components/Header";
import Text from "./Text";

const App = () => {
  return (
    <div>
      <Header />
      <Text className="header">Welcome to my website!</Text>
      <Text>Here's some more text.</Text>
    </div>
  );
};

export default App;
