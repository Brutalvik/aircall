import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { BiArrowBack } from "react-icons/bi";
import {
  callIcon,
  convertSecondsToTime,
  handleActiveTab,
} from "helpers/functions";
import { getRandomLetter } from "helpers/functions";
import moment from "moment";
import Spinner from "UI/Spinner/Spinner";

const Information = () => {
  const dispatch = useDispatch();
  const { call_type, created_at, direction, duration, from } = useSelector(
    (state) => state.calls.singleCall
  );
  const { isLoading } = useSelector((state) => state.calls);
  const { hours, minutes, seconds } = convertSecondsToTime(duration);

  return isLoading ? (
    <Spinner />
  ) : (
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
          <span>{moment(created_at).format("MMM DD, YYYY")}</span>
        </div>
        <div className="time-container">
          <p>{moment(created_at).format("hh:mm A")}</p>
        </div>
      </div>
      <div className="card-container">
        <div className="icons-container">{callIcon(call_type, direction)}</div>
        <p>Phone Number: </p>
        <div className="date-container">
          <p>{from}</p>
        </div>
      </div>
      {duration !== 0 && (
        <div className="card-container">
          <div className="date-container">
            <p>Duration</p>
          </div>
          <div className="date-container">
            {hours == 0 && minutes == 0 ? (
              <p>{seconds} Seconds</p>
            ) : (
              <p>
                {hours}:{minutes}:{seconds}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
