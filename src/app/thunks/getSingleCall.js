import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleCallSuccess, setLoading } from "app/reducers/callsreducer";
import axios from "axios";

export const getSingleCall = createAsyncThunk(
  "getSingleCall",
  ({ id, dispatch }) => {
    dispatch(setLoading(true));
    try {
      axios
        .get(`${process.env.API_URL}/${id}`)
        .then(({ data }) => dispatch(getSingleCallSuccess(data)));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  }
);
