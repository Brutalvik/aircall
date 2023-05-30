import React from "react";
import { createRoot } from "react-dom/client";

import Header from "Components/Header/Header";
import Container from "Components/Container/Container";
import Appbar from "UI/Appbar/Appbar";

import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "app/store";
import { getCallsData } from "app/thunks/getAllCallsThunk";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCallsData(dispatch));
  }, []);
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
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
