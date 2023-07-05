/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts:[],
  jumpData:{}
  
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setJumpData: (state, action) => {
      state.jumpData = action.payload;
    },
  
  },
});
export const {
  setPosts,
  setJumpData
} = authSlice.actions;
export default authSlice.reducer;

export const getPosts = () => (dispatch:any) => {
  const config = {
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {
      "Content-Type": "application/json",
    },
    
  };
  axios(config)

    .then((response) => {

      console.log(response, "responseeeeeeeee")
     
      dispatch(setPosts(response?.data));
     
     
    })
    .catch((error) => {
      console.log("error", error);
     
    });
};



