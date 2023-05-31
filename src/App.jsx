import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Header from "Components/Header/Header";
import AllCallsContainer from "Components/AllCallsContainer/AllCallsContainer";
import Appbar from "UI/Appbar/Appbar";

import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "app/store";
import { getCallsData } from "app/thunks/getAllCallsThunk";
import { setScrollEvent } from "app/reducers/callsreducer";

const App = () => {
  const dispatch = useDispatch();
  const { isScrolledToTop } = useSelector((state) => state.calls);

  useEffect(() => {
    const container = document.querySelector(".container");

    const handleScroll = () => {
      if (container.scrollTop === 0) {
        dispatch(setScrollEvent(true));
      } else {
        dispatch(setScrollEvent(false));
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getCallsData(dispatch));
  }, []);

  return (
    <div className="container">
      <div
        className={
          isScrolledToTop ? "header-container" : "header-container-sticky"
        }
      >
        <Header />
        <Appbar />
      </div>
      <div className="container-view">
        <AllCallsContainer />
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
