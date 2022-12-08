import {createAsyncThunk} from "@reduxjs/toolkit";
import {countHowManyLikes, findUserLikesSong, toggleLike} from "./like-service";

//Thunk to get number of likes for a song
export const countHowManyLikesThunk = createAsyncThunk(
    'countHowManyLikes', async (sid) => {
        return await countHowManyLikes(sid);
    }
)

//Thunk to create a new like
export const toggleLikeThunk = createAsyncThunk(
    'toggleLike', async(LikeObject) => {
        return await toggleLike(LikeObject.userId, LikeObject.songID);
    }
)

//Thunk to check if a song is liked by user
export const findUserLikesSongThunk = createAsyncThunk(
    'findUserLikesSong', async(LikeObject) => {
        return await findUserLikesSong(LikeObject.userId, LikeObject.songID)
    }
)