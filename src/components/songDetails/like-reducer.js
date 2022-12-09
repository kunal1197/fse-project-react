import {createSlice} from "@reduxjs/toolkit";
import {
    countHowManyLikesThunk,
    findLikedSongsThunk,
    findUserLikesSongThunk,
    toggleLikeThunk
} from "../../services/likes/like-thunk";

const initialState = {
    likes: {
        count: 0,
        userLiked: false,
        likedSongs: []
    },
    loading: true,
}

const likeReducer = createSlice({
    name: 'likes',
    initialState: initialState,
    extraReducers: {
        [countHowManyLikesThunk.fulfilled]: (state, action) => {
            state.likes.count = action.payload
        },
        [findUserLikesSongThunk.fulfilled]: (state, action) => {
            state.likes.userLiked = action.payload
        },
        [toggleLikeThunk.fulfilled]: (state, action) => {
            state.likes.count = action.payload.count
            state.likes.userLiked = action.payload.userLiked
        },
        [findLikedSongsThunk.fulfilled]: (state, action) => {
            state.likes.likedSongs = action.payload
        },
        [findLikedSongsThunk.pending]: (state, action) => {
            conso
            state.likes.likedSongs = action.payload
        }
    }
})

export default likeReducer.reducer;