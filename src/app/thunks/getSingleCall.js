import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleCallSuccess } from "app/reducers/callsreducer";
import axios from "axios";

export const getSingleCall = createAsyncThunk(
  "getSingleCall",
  ({ id, dispatch }) => {
    try {
      axios
        .get(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`)
        .then(({ data }) => dispatch(getSingleCallSuccess(data)));
    } catch (error) {
      console.log(error);
    }
  }
);
