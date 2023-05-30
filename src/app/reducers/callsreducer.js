import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: null,
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
  },
});

export const { getAllCallsSuccess } = callsSlice.actions;

export default callsSlice.reducer;
