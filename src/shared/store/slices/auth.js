import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/shared/axios";

const initialState = {
  data: null,
  status: "loading",
  isAuth: false
};

export const fetchingSignIn = createAsyncThunk("auth/sign-in", async (body) => {
  const { data } = await axios.post("/auth/sign-in", body);
  return data;
});

export const fetchingSignUp = createAsyncThunk("auth/sign-up", async (body) => {
  const response = axios.post("auth/sign-up", body);
  return response.data;
});

export const fetchingAuthMe = createAsyncThunk("auth/me", async() => {
  const { data } = await axios.get("auth/me")
  return data
})



const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchingSignIn.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchingSignIn.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchingSignIn.rejected, (state) => {
        state.status = "failed";
        state.data = null;
        state.isAuth = false;
      })
      .addCase(fetchingSignUp.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchingSignUp.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchingSignUp.rejected, (state) => {
        state.status = "failed";
        state.data = null;
      })
      .addCase(fetchingAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
        state.isAuth = false;
      })
      .addCase(fetchingAuthMe.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchingAuthMe.rejected, (state) => {
        state.status = "failed";
        state.data = null;
        state.isAuth = false;
      });
  },
});

export const isAuth = (state) => state.auth.isAuth; 

export const authReducer = AuthSlice.reducer;
