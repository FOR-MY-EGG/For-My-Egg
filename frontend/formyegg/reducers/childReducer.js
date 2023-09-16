import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountBalance: 0,
  accountId: 0,
  accountNickname: "",
  accountNumber: "",
  birthDate: "",
  childId: 0,
  dday: 89,
  name: "",
  weeks: 0,

  checked: 0
};

const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    setChild: (state, action) => {
      state.accountBalance = action.payload.accountBalance;
      state.accountId = action.payload.accountId;
      state.accountNickname = action.payload.accountNickname;
      state.accountNumber = action.payload.accountNumber;
      state.birthDate = action.payload.birthDate;
      state.childId = action.payload.childId;
      state.dday = action.payload.dday;
      state.name = action.payload.name;
      state.weeks = action.payload.weeks;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
  },
});
export const { setChild, setChecked } = childSlice.actions;
export default childSlice.reducer;