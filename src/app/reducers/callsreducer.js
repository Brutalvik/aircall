import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "allCalls",
  allCalls: [],
  isScrolledToTop: true,
  archiveTriggered: true,
  singleCall: {},
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
    setScrollEvent: (state, action) => {
      state.isScrolledToTop = action.payload;
    },
    triggerArchive: (state) => {
      state.archiveTriggered = !state.archiveTriggered;
    },
    getSingleCallSuccess: (state, action) => {
      state.singleCall = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getAllCallsSuccess,
  setActiveTab,
  setScrollEvent,
  triggerArchive,
  getSingleCallSuccess,
  setLoading,
} = callsSlice.actions;

export default callsSlice.reducer;
