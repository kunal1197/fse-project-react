import React from "react";
import CreatableSelect from "react-select/creatable";
import LikesSideBar from "../likesSidebar";
import PlaylistsSideBar from "../playlistsSidebar";

const SideBar = () => {
    return (
        <>
            <div className="container bg-secondary bg-opacity-10 ttr-rounded-15px mt-2 p-2">
                <h4>Liked Songs</h4>
                <LikesSideBar/>
                <br/>
                <h4>Playlists</h4>
                <PlaylistsSideBar/>
            </div>
        </>
    );
};

export default SideBar;