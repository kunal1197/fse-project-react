import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const AUTH_API = `${BASE_URL}/api/auth`

const api = axios.create({
    withCredentials: true
});

export const signup = (user) => {
    console.log(user)
    return api.post(
        `${AUTH_API}/signup`, user
    ).then(response => response.data).catch(e => {
        console.log("Within signup auth-service",e);
        throw e;
    });
}

export const login = (credentials) =>
    api.post(`${AUTH_API}/login`, credentials)
        .then(response => response.data).catch(e =>{
        console.log(e);
        throw e;
        });

export const profile = () =>
    api.post(`${AUTH_API}/profile`)
        .then(response => response.data).catch(e => {
        console.log(e);
        throw e;
        });

export const logout = (user) =>
    api.post(`${AUTH_API}/logout`, user)
        .then(response => response.data).catch(e => {
        console.log(e);
        throw e;
        });