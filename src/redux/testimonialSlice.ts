import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testimonials from "../data/testimonials.json";
import type { Testimonial } from "../models/models";

// Simulate async API fetch
export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return testimonials;
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    data: null as Testimonial[] | null,
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default testimonialSlice.reducer;
