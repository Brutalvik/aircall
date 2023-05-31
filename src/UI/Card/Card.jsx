import React from "react";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneXFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { BiVoicemail, BiArchiveIn } from "react-icons/bi";
import Badge from "@mui/material/Badge";

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
    <div className="card-container" key={id}>
      {callType === "missed" && (
        <div className="icons-container">
          <BsFillTelephoneXFill className="missed-call" />
          {count > 1 && <Badge badgeContent={count} color="error" />}
        </div>
      )}
      {callType === "voicemail" && (
        <div className="icons-container">
          <BiVoicemail className="voicemail-call" />
          {count > 1 && <Badge badgeContent={count} color="error" />}
        </div>
      )}
      {callType === "answered" && (
        <div className="icons-container">
          <BsFillTelephoneInboundFill className="answered-call" />
          {count > 1 && <Badge badgeContent={count} color="error" />}
        </div>
      )}
      <p>{from}</p>
      <BsFillInfoCircleFill className="icons" />
      <BiArchiveIn className="icons" />
    </div>
  );
};

export default Card;
