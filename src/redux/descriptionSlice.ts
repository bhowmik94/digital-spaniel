import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateDescriptionData } from "../mocks/descriptionMock";
import type { DescriptionData } from "../models/models";

// Async thunk to imitate API call
export const fetchDescriptionData = createAsyncThunk(
  "description/fetchDescriptionData",
  async () => {
    // simulate network delay
    await new Promise((res) => setTimeout(res, 500));
    return generateDescriptionData();
  }
);

const descriptionSlice = createSlice({
  name: "description",
  initialState: {
    data: null as DescriptionData | null,
    status: "idle", // idle | loading | succeeded | failed
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDescriptionData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDescriptionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDescriptionData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default descriptionSlice.reducer;