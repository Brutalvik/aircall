import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { BiArrowBack } from "react-icons/bi";
import { handleActiveTab } from "helpers/functions";
import { getRandomLetter } from "helpers/functions";
import moment from "moment";

const Information = ({
  createdAt,
  from,
  direction,
  duration,
  callType,
  isArchived,
  id,
  to,
  count,
}) => {
  const dispatch = useDispatch();
  const { singleCall } = useSelector((state) => state.calls);
  console.log("singleCall", singleCall);
  return (
    <div className="info-container">
      <BiArrowBack
        className="back-icon"
        onClick={() => handleActiveTab("allCalls", dispatch)}
      />
      <div className="data-container">
        <Stack direction="row" spacing={2}>
          <Avatar>{getRandomLetter()}</Avatar>
        </Stack>
      </div>
      <div className="card-container">
        <div className="date-container">
          <span>{moment(createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div className="time-container">
          <p>{moment(createdAt).format("hh:mm A")}</p>
        </div>
      </div>
      <div className="card-container">
        <div className="date-container">
          <span>Phone Number:</span>
          <span>
            {direction}
            {from}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Information;
