import { createAsyncThunk } from "@reduxjs/toolkit";
import { triggerArchive } from "app/reducers/callsreducer";
import axios from "axios";

export const unarchiveCall = createAsyncThunk(
  "unarchiveCall",
  ({ id, dispatch }) => {
    const options = {
      is_archived: false,
    };
    try {
      axios
        .patch(
          `https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
          options
        )
        .then(({ status }) => status === 200 && dispatch(triggerArchive()));
    } catch (error) {
      console.log(error);
    }
  }
);
