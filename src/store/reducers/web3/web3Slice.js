import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: { providerType: null, walletName: null },
  address: null,
  chainId: null,
  error: null,
  pending: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setWeb3Wallet: (state, { payload }) => {
      state.wallet = payload;
    },
    setWalletAddress: (state, { payload }) => {
      state.address = payload;
    },
    setChainId: (state, { payload }) => {
      state.chainId = payload;
    },
    changeWallet: (state, { payload }) => {
      state.address = payload;
    },
    disconnectWallet: (state) => {
      state.wallet = null;
      state.address = null;
      state.network = null;
      state.chainId = null;
    },
    startConnectingWallet: (state) => {
      state.error = null;
      state.pending = true;
    },
    endConnectingWallet: (state) => {
      state.error = null;
      state.pending = false;
    },
    failedConnectingWallet: (state, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
    resetStatus: (state, { payload }) => {
      state.error = null;
      state.pending = false;
    },
  },
});

export const {
  setWeb3Wallet,
  setWalletAddress,
  setChainId,
  changeWallet,
  disconnectWallet,
  startConnectingWallet,
  endConnectingWallet,
  failedConnectingWallet,
  resetStatus,
} = authSlice.actions;
export default authSlice;
