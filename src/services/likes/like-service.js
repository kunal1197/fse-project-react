import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SONGS_API = `${BASE_URL}/api`;

const api = axios.create({
    withCredentials: true
});

export const toggleLike = async (uid, sid) => {
    const response = await api.put(`${SONGS_API}/users/${uid}/likes/${sid}`)
    return response.data;
}

export const countHowManyLikes = async (sid) => {
    const response = await api.get(`${SONGS_API}/songs/${sid}/likesCount`)
    return response.data;
}

export const findUserLikesSong = async (uid, sid) => {
    const response = await api.get(`${SONGS_API}/users/${uid}/likes/${sid}`)
    return !!response.data;
}
