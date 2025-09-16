import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { moviesSlice } from './moviesSlice'

export const store = configureStore({
  reducer: {
     user :userReducer,
     movies:moviesSlice.reducer
  },
})