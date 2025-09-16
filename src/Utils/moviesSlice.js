import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice( {
     name:"movies",
     initialState:{
          topRatedMovies:null
     },
     reducers:{
          addTopRatedmovies:(state,action)=>{
               state.topRatedMovies = action.payload;

          }
     }

});

export const {addTopRatedmovies} = moviesSlice.actions;
export default moviesSlice.reducer;