/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  // posts:[],
  upload:null,
  createchildData:{},
  GetPagesList:[],
  jumpData:{},
  addjump:[],
  insertclicktime:{},
  speedofAdd:{},
  speedofValue:{},
  finaldataofreward:{},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
    // setPosts: (state, action) => {
    //   state.posts = action.payload;
    // },
    setCreatechildData:(state,action)=>{
      state.createchildData = action.payload;
    },
    setGetPagesList:(state,action) =>{
       state.GetPagesList = action.payload;
    },
    setUpload:(state,action) =>{
      state.upload = action.payload;
   },
    setJumpData: (state, action) => {
      state.jumpData = action.payload;
    },
    setAddjump:(state,action)=>{
      state.addjump = action.payload;
    },
    setInsertclicktime:(state,action)=>{
      state.insertclicktime= action.payload;
    }, 
   setspeedofAdd:(state,action)=>{
    state.speedofAdd= action.payload;
   },
   setspeedofValue:(state,action)=>{
    state.speedofValue= action.payload;
   },
   setfinaldataofreward:(state,action)=>{
    state.finaldataofreward=action.payload;
   },
  
  },
});
export const {
  // setPosts,
  setCreatechildData,
  setGetPagesList,
  setJumpData,
  setAddjump,
  setInsertclicktime,
  setspeedofAdd,
  setspeedofValue,
  setfinaldataofreward,
  setUpload
} = authSlice.actions;
export default authSlice.reducer;





// export const getPosts = () => (dispatch:any) => {
//   const config = {
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     headers: {
//       "Content-Type": "application/json",
//     },
    
//   };
//   axios(config)

//     .then((response) => {

//       console.log(response, "responseeeeeeeee")
     
//       dispatch(setPosts(response?.data));
     
     
//     })
//     .catch((error) => {
//       console.log("error", error);
     
//     });

//  };

export const getPagesApi = () => (dispatch:any) => {
   const config = {
   method: "get",
   url:"https://jsonplaceholder.typicode.com/posts",
   headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
  },
  };
  
   axios(config)
   .then((response) => {
   console.log(response, "iam pages response");
   dispatch(setGetPagesList(response.data));
 }) 
  
   .catch((error) => {
   console.log(error, "iam pages error");
   });
  };
