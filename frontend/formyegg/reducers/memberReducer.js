import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  groupId: -1,
  memberId: -1,
  name: "",
  nickname: "",
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.token = action.payload.token;
      state.groupId = action.payload.member.groupId;
      state.memberId = action.payload.member.memberId;
      state.name = action.payload.member.name;
      state.nickname = action.payload.member.nickname;
    },
    setName: (state, action) => {
      state.name = action.payload;
    }
  },
});
export const { setMember, setName } = memberSlice.actions;
export default memberSlice.reducer;