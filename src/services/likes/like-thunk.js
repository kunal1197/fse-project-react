//Thunk to find all comments for a particular song
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findComments} from "../comments/comment-service";
import {findAllTuitsLikedByUser} from "./like-service";

export const findLikedSongsThunk = createAsyncThunk(
    'findAllTuitsLikedByUser', async (uid) => {
        return await findAllTuitsLikedByUser(uid);
    })