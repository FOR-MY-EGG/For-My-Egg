import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  groupId: 0,
  memberId: 0,
  isMember: 0,
  nickname: "",
  childId: 0,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.token = action.payload.accessToken;
      state.memberId = action.payload.memberId;
      state.nickname = action.payload.nickname;
      state.isMember = action.payload.isMember;
    },
    setIsMember: (state, action) => {
      state.isMember = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log(action.payload);
    },
    setGroupId: (state, action) => {
      state.groupId = action.payload;
      state.isMember = 1;
    },
    setChildId: (state, action) => {
      state.childId = action.payload;
    }
  },
});
export const { setMember, setToken, setGroupId, setIsMember, setChildId } = memberSlice.actions;
export default memberSlice.reducer;