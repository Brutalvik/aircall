import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const archiveCall = createAsyncThunk("archiveCall", (id) => {
  const options = {
    is_archived: true,
  };
  try {
    axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, options)
      .then((data) => console.log("DATA", data));
  } catch (error) {
    console.log(error);
  }
});