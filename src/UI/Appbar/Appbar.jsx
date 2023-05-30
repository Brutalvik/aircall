import React from "react";

//REACT ICONS
import {
  BsFillArchiveFill,
  BsInboxesFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

const Appbar = () => {
  return (
    <div className="app-container">
      <div className="app-items">
        <BsInboxesFill />
        <p>Inbox</p>
      </div>
      <div className="app-items">
        <BsFillTelephoneFill />
        <p>All Calls</p>
      </div>
      <div className="app-items">
        <BsFillArchiveFill />
        <p>Archive</p>
      </div>
    </div>
  );
};

export default Appbar;
