import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const USERS_API = `${BASE_URL}/api/users`;
const AUTH_API = `${BASE_URL}/api/auth`;

const SONGS_API = `${BASE_URL}/api/comments`;

const api = axios.create({
    withCredentials: true
});

export const createUser = (user) =>
    api
        .post(`${USERS_API}`, user)
        .then((response) => response.data);

export const findAllUsers = () =>
    api
        .get(USERS_API)
        .then((response) => response.data);

export const findUserById = (uid) =>
    api
        .get(`${USERS_API}/${uid}`)
        .then((response) => response.data);

export const deleteUser = (uid) =>
    api
        .delete(`${USERS_API}/${uid}`)
        .then((response) => response.data);

export const deleteUsersByUsername = (username) =>
    api
        .get(`${USERS_API}/username/${username}/delete`)
        .then((response) => response.data);

export const login = (user) =>
    api
        .post(`${AUTH_API}/login`, user)
        .then((response) => response.data);

export const signup = (user) =>
    api
        .post(`${AUTH_API}/signup`, user)
        .then((response) => response.data);

export const findComments = (sid) => {
    return axios.get(`${SONGS_API}/${sid}`)
        .then(response => response.data);
}

export const countHowManyLikes = (sid) => {
    return axios.get(`${SONGS_API}/songs/${sid}/likesCount`)
        .then(response => response.data);
}
