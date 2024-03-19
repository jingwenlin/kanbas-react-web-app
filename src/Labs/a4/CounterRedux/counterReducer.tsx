import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 123,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,action) => {
      const incrementBy = action.payload;
      // state.count = state.count + 1;
      state.count += incrementBy;
    },
    decrement: (state,{payload}) => {
      // state.count = state.count - 1;
      state.count -= payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;