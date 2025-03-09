import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserThunk = createAsyncThunk(
  "user/fetchUserThunk", //slicename/thunkname
  async () => {
    const response = await axios.get("https://fakestoreapi.com/users/1");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    islogin: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(fetchUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
