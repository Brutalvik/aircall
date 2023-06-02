import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerArchive, setLoading } from "app/reducers/callsreducer";
import axios from "axios";

export const unarchiveCall = createAsyncThunk(
  "unarchiveCall",
  ({ id, dispatch }) => {
    dispatch(setLoading(true));
    const options = {
      is_archived: false,
    };
    try {
      axios
        .patch(`${process.env.API_URL}/${id}`, options)
        .then(({ status }) => status === 200 && dispatch(triggerArchive()));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  }
);
