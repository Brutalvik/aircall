import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiArchiveOut } from "react-icons/bi";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { archiveCall } from "app/thunks/patchArchiveCallThunk";
import { unarchiveCall } from "app/thunks/patchUnarchiveCallThunk";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import moment from "moment";
import { getSingleCall } from "app/thunks/getSingleCall";
import { handleActiveTab, callIcon } from "helpers/functions";

const Card = ({
  direction,
  duration,
  callType,
  from,
  isArchived,
  id,
  createdAt,
  to,
  count,
}) => {
  const dispatch = useDispatch();

  const handleInfoDisplay = () => {
    handleActiveTab("info", dispatch);
    dispatch(getSingleCall({ id, dispatch }));
  };

  return (
    <div>
      <div className="date-container">
        <span>{moment(createdAt).format("MMM DD, YYYY")}</span>
      </div>
      <div className="card-container" key={id}>
        <div className="icons-container">{callIcon(callType, direction)}</div>
        <div>{count > 1 && <Badge badgeContent={count} color="error" />}</div>
        <p>{from}</p>
        <Tooltip title="Info">
          <div>
            <BsFillInfoCircleFill
              className="icons"
              onClick={handleInfoDisplay}
            />
          </div>
        </Tooltip>
        {isArchived ? (
          <Tooltip title="Unarchive">
            <div>
              <BiArchiveOut
                className="icons"
                onClick={() => dispatch(unarchiveCall({ id, dispatch }))}
              />
            </div>
          </Tooltip>
        ) : (
          <Tooltip title="Archive">
            <div>
              <HiArchiveBoxArrowDown
                className="icons"
                onClick={() => dispatch(archiveCall({ id, dispatch }))}
              />
            </div>
          </Tooltip>
        )}
        <div className="time-container">
          <p>{moment(createdAt).format("hh:mm A")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
