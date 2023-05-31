import React, { useEffect } from "react";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneXFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { BiVoicemail, BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import { handleInformationDisplay } from "helpers/functions";
import { archiveCall } from "app/thunks/patchArchiveCallThunk";
import { unarchiveCall } from "app/thunks/patchUnarchiveCallThunk";
import moment from "moment";
import { useDispatch } from "react-redux";

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
        <BsFillInfoCircleFill
          className="icons"
          onClick={handleInformationDisplay}
        />
        {isArchived ? (
          <BiArchiveOut
            className="icons"
            onClick={() => dispatch(unarchiveCall(id))}
          />
        ) : (
          <BiArchiveIn
            className="icons"
            onClick={() => dispatch(archiveCall(id))}
          />
        )}
        <div className="time-container">
          <p>{moment(createdAt).format("hh:mm A")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
