import React from "react";
import CreatableSelect from "react-select/creatable";
import LikesSideBar from "../likessidebar";
import Playlistssidebar from "../playlistssidebar";

const SideBar = () => {
    return (
        <>
            <div className="container">
                <LikesSideBar/>
                <Playlistssidebar/>
            </div>
        </>
    );
};

export default SideBar;