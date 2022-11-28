import React from "react";
import CreatableSelect from "react-select/creatable";
import LikesSideBar from "../likessidebar";
import Playlistssidebar from "../playlistssidebar";

const SideBar = () => {
    return (
        <>
            <div className="container bg-secondary bg-opacity-10 ttr-rounded-15px mt-2 p-2">
                <h2>Liked Songs</h2>
                <LikesSideBar/>
                <h2>Playlisted Songs</h2>
                <Playlistssidebar/>
            </div>
        </>
    );
};

export default SideBar;