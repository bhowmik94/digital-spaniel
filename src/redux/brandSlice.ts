import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateBrandData } from "../mocks/brandMock";
import type { BrandData } from "../models/models";

// Async thunk to imitate API call
export const fetchBrandData = createAsyncThunk(
  "description/fetchBrandData",
  async () => {
    // simulate network delay
    await new Promise((res) => setTimeout(res, 500));
    return generateBrandData();
  }
);

const brandSlice = createSlice({
  name: "description",
  initialState: {
    data: null as BrandData | null,
    status: "idle", // idle | loading | succeeded | failed
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBrandData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default brandSlice.reducer;