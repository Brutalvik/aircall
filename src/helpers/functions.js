import { setActiveTab } from "app/reducers/callsreducer";

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

export const handleInformationDisplay = () => {
  console.log("INFO CLICKED");
};
