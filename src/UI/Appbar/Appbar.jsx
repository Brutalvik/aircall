import React from "react";
import { handleActiveTab } from "helpers/functions";

//REACT ICONS
import {
  BsFillArchiveFill,
  BsInboxesFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Appbar = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.calls);

  return (
    <div className="app-container">
      <div
        className={activeTab === "inbox" ? "app-items-selected" : "app-items"}
        onClick={() => handleActiveTab("inbox", dispatch)}
      >
        <BsInboxesFill />
        <p>Inbox</p>
      </div>
      <div
        className={
          activeTab === "allCalls" ? "app-items-selected" : "app-items"
        }
        onClick={() => handleActiveTab("allCalls", dispatch)}
      >
        <BsFillTelephoneFill />
        <p>All Calls</p>
      </div>
      <div
        className={activeTab === "archive" ? "app-items-selected" : "app-items"}
        onClick={() => handleActiveTab("archive", dispatch)}
      >
        <BsFillArchiveFill />
        <p>Archive</p>
      </div>
    </div>
  );
};

export default Appbar;
