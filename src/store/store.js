import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appSlice from "./reducers/app/appSlice";
import authSlice from "./reducers/auth/authSlice";
import settingSlice from "./reducers/setting/settingSlice";
// import web3Slice from "./reducers/web3/web3Slice";

const persistedSettingReducer = persistReducer(
  {
    key: "site.setting",
    storage,
    whitelist: ["theme", "lang"],
  },
  settingSlice.reducer
);
const persistedAuthReducer = persistReducer(
  {
    key: "site.auth",
    storage,
    whitelist: [
      "user",
      "address",
      "accessToken",
      "referredCode",
      "refreshToken",
      "accessTokenExpire",
      "refreshTokenExpire",
    ],
  },
  authSlice.reducer
);
// const persistedWeb3Reducer = persistReducer(
//   {
//     key: "site.web3",
//     storage,
//   },
//   web3Slice.reducer
// );

const rootReducer = combineReducers({
  app: appSlice.reducer,
  setting: persistedSettingReducer,
  auth: persistedAuthReducer,
  // web3: persistedWeb3Reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
