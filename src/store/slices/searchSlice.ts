import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: ""
};

const counterSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    searchOption: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { searchOption } = counterSlice.actions;
export default counterSlice.reducer;
