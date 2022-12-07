import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SONGS_API = `${BASE_URL}/api/comments`;

export const findComments = (sid) => {
    return axios.get(`${SONGS_API}/${sid}`)
        .then(response => response.data);
}

export const addComment = async (newCommentBody) => {
    const response = await axios.post(`${SONGS_API}/${newCommentBody.postedBy}/song/${newCommentBody.songID}`,
        {comment : newCommentBody.comment})
    return response.data;
}

export const deleteComment = async (uid, sid) => {
    const response = await axios.delete(`${SONGS_API}/${uid}/song/${sid}`)
    return response.data
}

export const updateComment = async (uid, sid, comment) => {
    const response = await axios.put(`${SONGS_API}/${uid}/song/${sid}`, comment)
    return response.data
}
