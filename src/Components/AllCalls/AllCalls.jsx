import React from "react";
import { useSelector } from "react-redux";

const AllCalls = () => {
  const { allCalls } = useSelector((state) => state.calls);
  return (
    <div>
      <ul>
        {allCalls.map((call) => (
          <li key={call.id}>{call.from}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCalls;
