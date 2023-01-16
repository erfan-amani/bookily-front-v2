import { createSlice } from "@reduxjs/toolkit";
// import { signInHandler, updateUserData } from "./asyncActions";

const initialState = {
  user: null,
  accessToken: null,
  referredCode: null,
  notifications: [],
  status: "idle",
  pending: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNotifications: (state, { payload }) => {
      const newNotif = Array.isArray(payload) ? payload : [payload];

      state.notifications = [...state.notifications, ...newNotif];
    },
    readNotifications: (state, { payload }) => {
      state.notifications = state.notifications.filter((n) => n.id !== payload);
    },
    readAllNotifications: (state) => {
      state.notifications = [];
    },
    logout: (state) => {
      state.status = "idle";
      state.user = null;
      state.accessToken = null;
      state.logoutError = null;
    },
    setReferral: (state, { payload }) => {
      state.referredCode = payload.referredCode;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(updateUserData.pending, (state) => {
  //       state.status = "user-pending";
  //     })
  //     .addCase(updateUserData.fulfilled, (state, { payload }) => {
  //       state.status = "user-fulfilled";
  //       state.user = {
  //         ...payload,
  //       };
  //     })
  //     .addCase(updateUserData.rejected, (state, { payload }) => {
  //       state.status = "user-rejected";
  //     })

  //     .addCase(signInHandler.pending, (state) => {
  //       state.status = "connect-pending";
  //       state.error = null;
  //       state.pending = true;
  //     })
  //     .addCase(signInHandler.fulfilled, (state, { payload }) => {
  //       state.status = "connect-fulfilled";
  //       state.pending = false;
  //       state.accessToken = payload.accessToken;
  //       state.accessTokenExpire = payload.accessTokenExpire;
  //       state.user = payload.user;
  //     })
  //     .addCase(signInHandler.rejected, (state, { payload }) => {
  //       state.status = "connect-rejected";
  //       state.pending = false;
  //       state.error = payload;
  //       state.user = null;
  //     });
  // },
});

export const {
  setNotifications,
  readAllNotifications,
  readNotifications,
  logout,
  setReferral,
} = authSlice.actions;

export default authSlice;
