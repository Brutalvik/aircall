import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "allCalls",
  allCalls: [],
  isLoading: false,
  isScrolledToTop: true,
  archiveTriggered: true,
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
  },
});

export const {
  getAllCallsSuccess,
  setActiveTab,
  setScrollEvent,
  triggerArchive,
} = callsSlice.actions;

export default callsSlice.reducer;
