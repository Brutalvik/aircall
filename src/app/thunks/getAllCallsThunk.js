import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCallsSuccess, setLoading } from "app/reducers/callsreducer";
import axios from "axios";

export const getCallsData = createAsyncThunk("getAllCalls", (dispatch) => {
  dispatch(setLoading(true));
  try {
    axios.get(process.env.API_URL).then(({ data }) => {
      dispatch(getAllCallsSuccess(data));
    });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
});
