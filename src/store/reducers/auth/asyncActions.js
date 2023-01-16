// import { createAsyncThunk } from "@reduxjs/toolkit";
// import Web3Token from "web3-token";
// import moment from "moment";
// import axios from "axios";

// import { BASE_URL } from "library/config";
// import customAxios from "library/http";
// import translateServerErrors from "library/translateServerErrors";
// import { getActiveProvider } from "library/web3/helper";

// export const updateUserData = createAsyncThunk(
//   "user/update-user",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await customAxios.get("api/v1/user/me");

//       return response.data?.data;
//     } catch (error) {
//       if (error?.response) {
//         const errorMessage = translateServerErrors(error?.response);

//         return rejectWithValue(errorMessage);
//       } else {
//         return rejectWithValue("somethingWentWrong");
//       }
//     }
//   }
// );

// export const signInHandler = createAsyncThunk(
//   "auth/login",
//   async (address, { rejectWithValue, getState }) => {
//     try {
//       const { providerType } = getState()?.web3?.wallet;

//       const provider = getActiveProvider(providerType);

//       const signer = provider.getSigner();
//       const day1 = moment().add(1, "days");
//       // generating a token with 1 day of expiration time
//       const token = await Web3Token.sign(
//         async (msg) => await signer.signMessage(msg),
//         "1d"
//       );

//       if (token) {
//         const user = await axios.post(`${BASE_URL}api/v1/user/login`, {
//           address,
//         });

//         if (user?.data?.data) {
//           return {
//             accessToken: token,
//             user: user?.data?.data,
//             accessTokenExpire: day1.unix(),
//           };
//         } else {
//           return rejectWithValue("somethingWentWrong");
//         }
//       }
//     } catch (error) {
//       console.log({ error });
//       if (error?.response) {
//         const errorMessage = translateServerErrors(error?.response);
//         return rejectWithValue(errorMessage);
//       } else if (error?.reason) {
//         return rejectWithValue(error?.reason);
//       } else {
//         return rejectWithValue("somethingWentWrong");
//       }
//     }
//   }
// );
