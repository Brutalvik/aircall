import React from "react";
import { useSelector } from "react-redux";
//UI Components

import Card from "UI/Card/Card";

const Container = () => {
  const { allCalls } = useSelector((state) => state.calls);
  return (
    <div>
      {allCalls.map(
        ({
          id,
          duration,
          from,
          to,
          call_type,
          is_archived,
          direction,
          created_at,
        }) =>
          from && (
            <Card
              key={id}
              id={id}
              duration={duration}
              from={from}
              direction={direction}
              isArchived={is_archived}
              createdAt={created_at}
              callType={call_type}
              to={to}
            />
          )
      )}
    </div>
  );
};

export default Container;
