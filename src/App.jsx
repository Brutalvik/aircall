import React from "react";
import { createRoot } from "react-dom/client";

import Header from "Components/Header/Header";
import Container from "Components/Container/Container";
import Appbar from "UI/Appbar/Appbar";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Appbar />
      <div className="container-view">
        <Container />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
