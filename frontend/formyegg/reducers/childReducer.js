import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountBalance: 0,
  accountId: 0,
  accountNickname: "",
  accountNumber: "",
  birthDate: "",
  childId: 0,
  dday: 0,
  name: "",
  weeks: 0,

  checked: 0,
  egg: ""
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
      state.egg = action.payload.egg;
      console.log("change---"+ JSON.stringify(action.payload))
      
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
    initChild: (state) => {
      state.accountBalance = 0,
      state.accountId = 0,
      state.accountNickname = "",
      state.accountNumber = "",
      state.birthDate = "",
      state.childId = 0,
      state.dday = 0,
      state.name = "",
      state.weeks = 0,

      state.checked = 0
    },
    setEgg: (state, action) => {
      state.egg = action.payload;
    }
  },
});
export const { setChild, setChecked, initChild } = childSlice.actions;
export default childSlice.reducer;