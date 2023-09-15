import { combineReducers } from "redux";
import storage from "@react-native-async-storage/async-storage"
import persistReducer from "redux-persist/es/persistReducer";
import memberReducer from "./reducers/memberReducer";
import childReducer from "./reducers/childReducer";
import accountReducer from "./reducers/accountReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["member", "child", "account"],
};

const rootReducer = combineReducers({
  // 필요한거 더 추가하세요
  member: memberReducer,
  child: childReducer,
  account: accountReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;