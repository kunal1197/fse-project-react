import {createSlice} from "@reduxjs/toolkit";
import {
    countHowManyLikesThunk, findAllSongsLikedByUserThunk,
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
            console.log("countHowManyLikesThunk: ", action, state)
            console.log("countHowManyLikesThunk: ", state.likes.likedSongs)
            state.likes.count = action.payload
        },
        [findUserLikesSongThunk.fulfilled]: (state, action) => {
            state.likes.userLiked = action.payload
        },
        [toggleLikeThunk.fulfilled]: (state, action) => {
            state.likes.count = action.payload.count
            state.likes.userLiked = action.payload.userLiked
        },
        [findAllSongsLikedByUserThunk.fulfilled]: (state, action) => {
            console.log("Inside like fulfilled reducer", action);
            console.log("State: ", state.likes);
            console.log("State-likes: ", state.likes.likedSongs);
            console.log("action.payload.likedSongs: ", action.payload);
            state.likes.likedSongs = action.payload;
        },
        [findAllSongsLikedByUserThunk.pending]: (state, action) => {
            console.log("Inside like pending reducer", action);
        },
        [findAllSongsLikedByUserThunk.rejected]: (state, action) => {
            console.log("Inside like rejected reducer", action);
        },
    }
})

export default likeReducer.reducer;