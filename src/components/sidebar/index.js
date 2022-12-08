import React from "react";
import CreatableSelect from "react-select/creatable";
import LikesSideBar from "../likesSidebar";
import PlaylistsSideBar from "../playlistsSidebar";

const SideBar = () => {
    return (
        <>
            <div className="ttr-sidebar container bg-secondary bg-opacity-10 ttr-rounded-5px mt-2 p-2">
                <h3>Liked Songs</h3>
                <LikesSideBar/>
                <br/>
                <h3>Playlists</h3>
                <PlaylistsSideBar/>
            </div>
        </>
    );
};

export default SideBar;