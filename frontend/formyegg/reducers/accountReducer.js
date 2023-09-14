import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "신한 주거래 S20통장",
  number: "110-123-45687",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount : (state, action)=>{
      state.title = action.payload.title,
      state.number = action.payload.number
    }
  },
});
export const { setAccount} = accountSlice.actions;
export default accountSlice.reducer;