import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: string;
  isDetailpageOpened:boolean
}

const initialState: CounterState = {
  value: "",
  isDetailpageOpened:false
};

const counterSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
   
    searchOption: (state, action) => {
      state.value = action.payload;
    },
    displaySearch:(state, action)=>{
      state.isDetailpageOpened=action.payload
    }
  }
});

export const { searchOption , displaySearch} = counterSlice.actions;
export default counterSlice.reducer;
