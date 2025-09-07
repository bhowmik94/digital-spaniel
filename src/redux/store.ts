import { configureStore } from "@reduxjs/toolkit";
import descriptionReducer from "./descriptionSlice";
import brandReducer from "./brandSlice";
import testimonialReducer from "./testimonialSlice";

export const store = configureStore({
  reducer: {
    description: descriptionReducer,
    brand: brandReducer,
    testimonials: testimonialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;