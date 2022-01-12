import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import baseServerApi from "../api/baseServerApi";

interface MoviesState {
    movieList: { name: string, overview: string }[],
    selectedMovie: { name: string, overview: string },
    rightGuesses: number,
    wrongGuesses: number,
    hintUse: number,
    error: string
}

const initialState = {
    movieList: [],
    selectedMovie: {name: "", overview: ""},
    rightGuesses: 0,
    wrongGuesses: 0,
    hintUse: 0,
    error: ""
} as MoviesState

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await baseServerApi.get(`3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;

})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovieToGuess: (state, action: { payload: { name: string, overview: string } }) => {
            state.selectedMovie = action.payload;
            state.movieList = state.movieList.filter((movie: { name: string }) => {
                return movie.name !== action.payload.name
            })
        },
        incrementRightGuess: (state) => {
            state.rightGuesses++
        },
        incrementWrongGuess: (state) => {
            state.wrongGuesses++
        },
        incrementHint: (state) => {
            state.hintUse++
        },

    },
    extraReducers: builder => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<[]>) => {
            state.movieList = action.payload;
            state.selectedMovie = action.payload[Math.floor(Math.random() * action.payload.length)];
            state.movieList = state.movieList.filter((movie: { name: string }) => movie.name !== state.selectedMovie.name);
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.error = `${action.error.message}, please try again later.`
        })
    }
})

export const {setMovieToGuess, incrementRightGuess, incrementWrongGuess, incrementHint} = moviesSlice.actions

export default moviesSlice.reducer
