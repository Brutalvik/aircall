import React from "react";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneXFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { BiVoicemail, BiArchiveIn } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import { handleInformationDisplay, handleArchive } from "helpers/functions";
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
        <BiArchiveIn className="icons" onClick={handleArchive} />
      </div>
    </div>
  );
};

export default Card;
