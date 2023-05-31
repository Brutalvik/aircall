import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "allCalls",
  allCalls: [],
  isLoading: false,
  isScrolledToTop: true,
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
  },
});

export const { getAllCallsSuccess, setActiveTab, setScrollEvent } =
  callsSlice.actions;

export default callsSlice.reducer;
