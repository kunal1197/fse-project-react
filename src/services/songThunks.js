import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchForSongs} from "./songService";

export const searchForSongsThunk = createAsyncThunk(
    'searchForSongs', async (songName) => {
        return await searchForSongs(songName);
    }

)