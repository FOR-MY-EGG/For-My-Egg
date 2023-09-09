import { combineReducers } from "redux";
import storage from "@react-native-async-storage/async-storage"
import persistReducer from "redux-persist/es/persistReducer";
import memberReducer from "./reducers/memberReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["member"],
};

const rootReducer = combineReducers({
  // 필요한거 더 추가하세요
  member: memberReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;