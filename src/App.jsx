import React from "react";
import { createRoot } from "react-dom/client";

import Header from "Components/Header/Header";
import Container from "Components/Container/Container";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Container />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
