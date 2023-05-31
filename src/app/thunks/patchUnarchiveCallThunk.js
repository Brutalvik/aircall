import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const unarchiveCall = createAsyncThunk("unarchiveCall", (id) => {
  const options = {
    is_archived: false,
  };
  try {
    axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, options)
      .then((data) => console.log("unarchive data", data));
  } catch (error) {
    console.log(error);
  }
});
