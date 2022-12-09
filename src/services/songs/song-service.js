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
        const anotherResponse = await searchForSongsCall(songName);
        return anotherResponse.data;
    }
    console.log(response)
    return response.data;
}

export const searchForTitle = async (sid) => {
    const response = await axios.get(`${SONGS_API}/search`)
    const songData = response.data
    console.log("Song Data => ", songData)
}