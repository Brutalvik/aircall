import React from "react";

const Card = ({
  direction,
  duration,
  callType,
  from,
  isArchived,
  id,
  createdAt,
  to,
}) => {
  return (
    <div className="card-container" key={id}>
      <p>{from}</p>
    </div>
  );
};

export default Card;
