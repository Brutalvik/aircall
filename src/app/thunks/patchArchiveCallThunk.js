import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerArchive } from "app/reducers/callsreducer";
import axios from "axios";

export const archiveCall = createAsyncThunk(
  "archiveCall",
  ({ id, dispatch }) => {
    const options = {
      is_archived: true,
    };
    try {
      axios
        .patch(`${process.env.API_URL}/${id}`, options)
        .then(({ status }) => status === 200 && dispatch(triggerArchive()));
    } catch (error) {
      console.log(error);
    }
  }
);
