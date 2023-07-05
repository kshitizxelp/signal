// src/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice';


const rootReducer = combineReducers({
  auth: authReducer,
});



export const store = configureStore({
  reducer: rootReducer,
});


export default store;
