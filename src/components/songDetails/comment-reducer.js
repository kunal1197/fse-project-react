import {createSlice} from "@reduxjs/toolkit";
import {findCommentsThunk} from "../../services/comments/comment-thunk";

const initialState = {
    comments: [],
    loading: true
}

const commentReducer = createSlice({
    name: 'comments',
    initialState: initialState,
    extraReducers: {
        [findCommentsThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        }
    }
})

export default commentReducer.reducer;