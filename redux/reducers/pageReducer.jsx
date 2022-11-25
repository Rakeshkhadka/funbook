import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    skip: 0,
    limit: 10,
  },
  reducers: {
    setPage: (state, action) => {
      state.skip = action.payload;
    },
  },
});
export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
