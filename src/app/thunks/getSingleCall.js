import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleCallSuccess } from "app/reducers/callsreducer";
import axios from "axios";

export const getSingleCall = createAsyncThunk(
  "getSingleCall",
  ({ id, dispatch }) => {
    try {
      axios
        .get(`${process.env.API_URL}/${id}`)
        .then(({ data }) => dispatch(getSingleCallSuccess(data)));
    } catch (error) {
      console.log(error);
    }
  }
);
