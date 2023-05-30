import React from "react";
import { createRoot } from "react-dom/client";

import Header from "Components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view"></div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
