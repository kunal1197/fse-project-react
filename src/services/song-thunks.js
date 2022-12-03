import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchForSongs} from "./song-service";

export const searchForSongsThunk = createAsyncThunk(
    'searchForSongs', async (songName) => {
        return await searchForSongs(songName);
    }

)