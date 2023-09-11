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
      state.token = action.payload.accessToken;
      state.memberId = action.payload.memberId;
      state.nickname = action.payload.nickname;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log(action.payload);
    },
    setGroupId: (state, action) => {
      state.groupId = action.payload;
    }
  },
});
export const { setMember, setName, setToken, setGroupId } = memberSlice.actions;
export default memberSlice.reducer;