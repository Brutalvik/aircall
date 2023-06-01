import React from "react";
import { useSelector } from "react-redux";

const Information = () => {
  const { singleCall } = useSelector((state) => state.calls);
  console.log("singleCall", singleCall);
  return <div className="info-container">Information</div>;
};

export default Information;
