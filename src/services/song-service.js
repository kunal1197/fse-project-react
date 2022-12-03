import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SONGS_API = `${BASE_URL}/api/music`;

const searchForSongsCall = async (songName) => {
    return await axios.get(`${SONGS_API}/search`, {
        params: {
            q: songName
        }
    });
}

export const searchForSongs = async (songName) => {
    const response = await searchForSongsCall(songName);
    if (response.data.statusCode === 401) {
        // Ideally, we should retry the search query again here since the server
        // refreshes the Spotify access token on a 401. But that is not working as
        // expected and the retry request is being sent before the token refreshes.
        return []
    }
    return response.data;
}