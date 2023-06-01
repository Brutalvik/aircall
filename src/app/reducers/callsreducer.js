import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "allCalls",
  allCalls: [],
  isLoading: false,
  isScrolledToTop: true,
  archiveTriggered: true,
  singleCall: {},
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
    setScrollEvent: (state, action) => {
      state.isScrolledToTop = action.payload;
    },
    triggerArchive: (state) => {
      state.archiveTriggered = !state.archiveTriggered;
    },
    getSingleCallSuccess: (state, action) => {
      state.singleCall = action.payload;
    },
  },
});

export const {
  getAllCallsSuccess,
  setActiveTab,
  setScrollEvent,
  triggerArchive,
  getSingleCallSuccess,
} = callsSlice.actions;

export default callsSlice.reducer;
