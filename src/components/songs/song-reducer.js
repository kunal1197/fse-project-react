import {createSlice} from "@reduxjs/toolkit";
import {searchForSongsThunk} from "../../services/song-thunks";

const initialState = {
    songs: [],
    loading: true
}

const songReducer = createSlice({
    name: 'songs',
    initialState: initialState,
    extraReducers: {
        [searchForSongsThunk.fulfilled]: (state, action) => {
            state.songs = action.payload
        }
    }
})

export default songReducer.reducer;