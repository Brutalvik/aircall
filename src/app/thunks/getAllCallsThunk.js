import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getAllCallsSuccess } from "app/reducers/callsreducer";

export const getCallsData = createAsyncThunk("getAllCalls", (dispatch) => {
  try {
    axios
      .get(process.env.API_URL)
      .then((data) => dispatch(getAllCallsSuccess(data.data)));
  } catch (error) {}
});
