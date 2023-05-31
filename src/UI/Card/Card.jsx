import React, { useEffect } from "react";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneXFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { BiVoicemail, BiArchiveOut } from "react-icons/bi";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { handleInformationDisplay } from "helpers/functions";
import { archiveCall } from "app/thunks/patchArchiveCallThunk";
import { unarchiveCall } from "app/thunks/patchUnarchiveCallThunk";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import moment from "moment";

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
  return (
    <div>
      <div className="date-container">
        <span>{moment(createdAt).format("MMM DD, YYYY")}</span>
      </div>
      <div className="card-container" key={id}>
        <div className="icons-container">
          {callType === "missed" && (
            <BsFillTelephoneXFill className="missed-call" />
          )}
          {callType === "voicemail" && (
            <BiVoicemail className="voicemail-call" />
          )}
          {callType === "answered" && (
            <BsFillTelephoneInboundFill className="answered-call" />
          )}
        </div>

        <div className="badge-container">
          {count > 1 && <Badge badgeContent={count} color="error" />}
        </div>
        <p>{from}</p>
        <Tooltip title="Info">
          <div>
            <BsFillInfoCircleFill
              className="icons"
              onClick={handleInformationDisplay}
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
