import axios from "axios";
import React from "react";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import SongComments from "../components/songDetails/SongComments";
import {findComments} from "./services";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import songReducer from "../components/songs/song-reducer";
import commentReducer from "../components/songDetails/comment-reducer";
import likeReducer from "../components/songDetails/like-reducer";


jest.mock('axios');

const newComment = {
    songID: 'dummy_song_id',
    comment: 'This is a great song',
    postedBy: '123',
    postedOn: '2022-12-08T07:32:45.898+00:00'
}

const nasa = {
    username: 'NASA',
    password: 'nasa45',
    email: 'nasa@aliens.com'
};

const store = configureStore({
    reducer: {
        songs: songReducer,
        comments: commentReducer,
        likes: likeReducer,
    }
})

test('comments displayed on screen', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {comment: newComment} }));
    const response = await findComments('dummy_song_id');
    const comment = response.comment;

    render(
        <Provider store={store}>
            <HashRouter>
                <SongComments
                    comment={comment}
                    userID={"me"}
                    user={nasa}
                />
            </HashRouter>
        </Provider>
        );

    const user = screen.getByText(/This is a great song/i);
    expect(user).toBeInTheDocument();
});



