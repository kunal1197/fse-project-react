import axios from "axios";
import React from "react";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {countHowManyLikes} from "./services";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import songReducer from "../components/songs/song-reducer";
import commentReducer from "../components/songDetails/comment-reducer";
import likeReducer from "../components/songDetails/like-reducer";
import SongStats from "../components/songDetails/song-stats";

jest.mock('axios');

const store = configureStore({
    reducer: {
        songs: songReducer,
        comments: commentReducer,
        likes: likeReducer,
    }
})

test('likes displayed on screen', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {like: 4} }));
    await countHowManyLikes('dummy_song_id');

    render(
        <Provider store={store}>
            <HashRouter>
                <SongStats/>
            </HashRouter>
        </Provider>
    );

    const user = screen.getByText(/4/i);
    expect(user).toBeInTheDocument();
});



