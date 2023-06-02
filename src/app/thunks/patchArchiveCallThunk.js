import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerArchive, setLoading } from "app/reducers/callsreducer";
import axios from "axios";

export const archiveCall = createAsyncThunk(
  "archiveCall",
  ({ id, dispatch }) => {
    dispatch(setLoading(true));
    const options = {
      is_archived: true,
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
