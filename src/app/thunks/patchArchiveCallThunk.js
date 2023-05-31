import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const archiveCall = createAsyncThunk("archiveCall", (id, bool) => {
  try {
    axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
        is_archived: bool,
      })
      .then((data) => console.log("DATA", data));
  } catch (error) {
    console.log(error);
  }
});
