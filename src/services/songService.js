import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SONGS_API = `${BASE_URL}/api/music`;

export const searchForSongs = async (songName) => {
    const response = await axios.get(`${SONGS_API}/search`, {
        params: {
            q: songName
        }
    });
    return response.data;
}