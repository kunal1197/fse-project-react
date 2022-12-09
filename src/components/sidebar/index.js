import React, {useEffect, useState} from "react";
import CreatableSelect from "react-select/creatable";
import LikesSideBar from "../likesSidebar";
import PlaylistsSideBar from "../playlistsSidebar";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
const SideBar = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    useEffect(async () => {
        try {
            const user = await service.profile();
            setUser(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <div className="ttr-sidebar container bg-secondary bg-opacity-10 ttr-rounded-5px mt-2 p-2">
                <h3>Liked Songs</h3>
                <LikesSideBar
                    userID={"me"}
                    user={user}
                />
                <br/>
                <h3>Playlists</h3>
                <PlaylistsSideBar/>
            </div>
        </>
    );
};

export default SideBar;