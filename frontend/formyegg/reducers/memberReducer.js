import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  groupId: 0,
  memberId: 0,
  isMember: 0,
  nickname: "",
  fcmToken: ""
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
      state.groupId = action.payload.groupId;
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
    setFcmToken : (state, action) => {
      state.fcmToken = action.payload;
    },
    initMember: (state, action) => {
      state.token= "",
      state.groupId= 0,
      state.memberId= 0,
      state.isMember= 0,
      state.nickname="",
      state.fcmToken= ""
    },
  },
});
export const { setMember, setToken, setGroupId, setIsMember, setFcmToken, initMember} = memberSlice.actions;
export default memberSlice.reducer;