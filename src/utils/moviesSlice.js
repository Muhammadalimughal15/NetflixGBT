import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null, // ✅ lowercase "n"
    trailerVideo : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // ✅ lowercase "n"
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload; // ✅ lowercase "n"
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload; // ✅ lowercase "n"
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload; // ✅ lowercase "n"
    },
    addTrailerVideo : (state, action ) =>{
      state.trailerVideo = action.payload;
    }
  },

});

export const { addNowPlayingMovies,  addPopularMovies ,addTrailerVideo ,  addTopRatedMovies , addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
