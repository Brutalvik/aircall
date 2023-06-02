import React from "react";
import { useSelector } from "react-redux";
import { countCallsFromSameNumber, hasArchivedItem } from "helpers/functions";
import Card from "UI/Card/Card";
import Spinner from "UI/Spinner/Spinner";

const ArchivedCallsContainer = () => {
  const { allCalls, isLoading } = useSelector((state) => state.calls);
  const propertiesToCheck = ["from", "call_type"];
  const groupedCalls = countCallsFromSameNumber(allCalls, propertiesToCheck);

  return isLoading ? (
    <Spinner />
  ) : hasArchivedItem(groupedCalls) ? (
    <div>
      {groupedCalls.map(
        (call) =>
          call.obj.from &&
          call.obj.is_archived && (
            <Card
              key={call.obj.id}
              id={call.obj.id}
              duration={call.obj.duration}
              from={call.obj.from}
              direction={call.obj.direction}
              isArchived={call.obj.is_archived}
              createdAt={call.obj.created_at}
              callType={call.obj.call_type}
              to={call.obj.to}
              count={call.count}
            />
          )
      )}
    </div>
  ) : (
    <div className="center-container">
      <span>No Archived Calls !</span>
    </div>
  );
};

export default ArchivedCallsContainer;
