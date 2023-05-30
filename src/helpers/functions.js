import { setActiveTab } from "app/reducers/callsreducer";

export const handleActiveTab = (tab, dispatch) => {
  dispatch(setActiveTab(tab));
};
