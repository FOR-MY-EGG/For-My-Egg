import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountTitle: "신한 주거래 S20통장",
  number: "110-123-45687",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount : (state, action)=>{
      state.accountTitle = action.payload.title,
      state.number = action.payload.number
    }
  },
});
export const { setAccount} = accountSlice.actions;
export default accountSlice.reducer;