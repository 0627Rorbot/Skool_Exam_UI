import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./subject/subjectSlice";

const store = configureStore({
  reducer: {
    subject: subjectReducer,
  },
});

export default store;
