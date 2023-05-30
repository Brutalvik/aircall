import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "allCalls",
  allCalls: [],
  archived: [],
  inbox: [],
  isLoading: false,
};

const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    getAllCallsSuccess: (state, action) => {
      state.allCalls = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { getAllCallsSuccess, setActiveTab } = callsSlice.actions;

export default callsSlice.reducer;
