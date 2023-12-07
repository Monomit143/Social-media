import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Friend_Api,
  Group_Api,
  Pages_api,
  bassUrl,
  log_api,
  marketApi,
  profile_api,
  reg_api,
} from "./AllApi_Stor";
const initialValue = {
  isLoading: false,
  postValue: [],
  error: null,
};

export const fatchPost = createAsyncThunk("users/fatchPost", async () => {
  const res = await axios.get(bassUrl);
  return res?.data;
});
export const regis_post = createAsyncThunk(
  "signup/regis_post",
  async (userData) => {
    const res = await axios.post(reg_api, userData, {
      headers: {
        "Content-Type": "application/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res?.data;
  }
);
export const login_post = createAsyncThunk(
  "singin/login_post",
  async (userData) => {
    const res = await axios.post(log_api, userData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res?.data;
  }
);
export const profile_get = createAsyncThunk("profile/profile_get", async () => {
  const res = await axios.get(profile_api, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": window.sessionStorage.getItem("Token"),
    },
  });
  return res?.data;
});

export const PagesGet_Api = createAsyncThunk("pages", async () => {
  const res = await axios.get(Pages_api);
  return res?.data;
});
export const MarketGet_Api = createAsyncThunk("market", async () => {
  const res = await axios.get(marketApi);
  return res?.data;
});
export const Friendget_Api = createAsyncThunk("friend", async () => {
  const res = await axios.get(Friend_Api);
  return res?.data;
});
export const GrouGet_Api = createAsyncThunk("group", async () => {
  const res = await axios.get(Group_Api);
  return res?.data;
});
export const Api = createSlice({
  name: "users",
  initialState: initialValue,

  extraReducers: (builder) => {
    console.log("this is builder", builder);
    builder.addCase(fatchPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fatchPost.fulfilled, (state, action) => {
      console.log("Action is Fulfilled", action);
      state.isLoading = false;
      state.postValue = action.payload;
      state.error = null;
    });
    builder.addCase(fatchPost.rejected, (state, action) => {
      console.log("Action is rejected", action);
      state.isLoading = false;
      state.postValue = [];
      state.error = action.error.message;
    });
    builder.addCase(regis_post.pending, (state, action) => {
      state.isLoading = true;
      console.log(state);
    });
    builder.addCase(regis_post.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = "success";
      console.log(state);
    });
    builder.addCase(regis_post.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "Failed";
      console.log(state);
    });
    builder.addCase(login_post.pending, (state, action) => {
      state.isLoading = true;
      console.log(state);
    });
    builder.addCase(login_post.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = "success";
      console.log(state);
    });
    builder.addCase(login_post.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "Failed";
      console.log(state);
    });
    builder.addCase(profile_get.pending, (state, action) => {
      state.isLoading = true;
      console.log(state);
    });
    builder.addCase(profile_get.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = "success";
      console.log(state);
    });
    builder.addCase(profile_get.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "Failed";
      console.log(state);
    });
    builder.addCase(PagesGet_Api.pending, (state, action) => {
      state.isLoading = "Loading......";
      state.postValue = null;
    });
    builder.addCase(PagesGet_Api.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = action.payload;
    });
    builder.addCase(PagesGet_Api.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Try Again";
    });
    builder.addCase(MarketGet_Api.pending, (state, action) => {
      state.isLoading = "Loading......";
      state.postValue = null;
    });
    builder.addCase(MarketGet_Api.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = action.payload;
    });
    builder.addCase(MarketGet_Api.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Try Again";
    });
    builder.addCase(Friendget_Api.pending, (state, action) => {
      state.isLoading = "Loading......";
      state.postValue = null;
    });
    builder.addCase(Friendget_Api.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = action.payload;
    });
    builder.addCase(Friendget_Api.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Try Again";
    });
    builder.addCase(GrouGet_Api.pending, (state, action) => {
      state.isLoading = "Loading......";
      state.postValue = null;
    });
    builder.addCase(GrouGet_Api.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postValue = action.payload;
    });
    builder.addCase(GrouGet_Api.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Try Again";
    });
  },
});
export default Api.reducer;
