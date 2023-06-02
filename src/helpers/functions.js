import { setActiveTab } from "app/reducers/callsreducer";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneXFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { BiVoicemail } from "react-icons/bi";
import React from "react";

export const handleActiveTab = (tab, dispatch) => {
  dispatch(setActiveTab(tab));
};

export const countCallsFromSameNumber = (arr, properties) => {
  const valueCounts = {};

  for (const obj of arr) {
    const values = properties.map((property) => obj[property]);
    const key = values.join("_");

    if (valueCounts[key]) {
      valueCounts[key].count++;
    } else {
      valueCounts[key] = { obj, count: 1 };
    }
  }

  const uniqueObjects = Object.values(valueCounts);
  return uniqueObjects;
};

export const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters.charAt(randomIndex);
};

export const callIcon = (callType, direction) => {
  if (callType === "missed" && direction === "inbound") {
    return <BsFillTelephoneXFill className="missed-call" />;
  }
  if (callType === "voicemail") {
    return <BiVoicemail className="voicemail-call" />;
  }
  if (callType === "answered" && direction === "inbound") {
    return <BsFillTelephoneInboundFill className="answered-call" />;
  }
  if (callType === "answered" && direction === "outbound") {
    return <BsFillTelephoneOutboundFill className="answered-call" />;
  }
  if (callType === "missed" && direction === "outbound") {
    return <BsFillTelephoneOutboundFill className="missed-call" />;
  }
};

const formatTime = (value) => {
  return value < 10 ? `0${value}` : value;
};

export const convertSecondsToTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  return {
    hours: formatTime(hours),
    minutes: formatTime(minutes),
    seconds: formatTime(remainingSeconds),
  };
};

export const hasArchivedItem = (array) => {
  return array.some((item) => item.obj.is_archived === true);
};
