import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import dateFormat from "dateformat";
import SongStats from "./song-stats";
import * as service from "../../services/auth-service";
const SongDetails = () => {
    const [user, setUser] = useState({});
    const location = useLocation()
    const navigate = useNavigate()
    const song = location.state.songDetails
    console.log(song)
    const releaseYear = dateFormat(song.releaseYear+"T08:59:00.000Z", "mmmm dS, yyyy")
    useEffect(async () => {
        try {
            const user = await service.profile();
            setUser(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
    return(
        <div>
            <div className="p-2">
                <div className="mb-2 position-relative">
                    <img className="w-100 wd-song-banner" src={`${song.image}`} alt={song.title}/>
                </div>
                <h2 className="fw-bolder">{song.title}</h2>
                <div>
                    <h4 className="pt-0">Artists Name</h4>
                    <p className="pt-2">
                        Song details
                    </p>
                    <p>
                        <i className="fa-sharp fa-solid fa-album me-2"></i>
                        Album name
                        <i className="far fa-music ms-3 me-2"></i>
                        Genre
                        <i className="far fa-calendar ms-3 me-2"></i>
                        {releaseYear}
                        <i className="far fa-link ms-3 me-2"></i>
                        <a href="/song-details" className="text-decoration-none text-dark">Song link</a>
                        <br/>

                    </p>
                    <hr/>
                    <SongStats song={song}/>
                    <hr/>
                </div>
            </div>
            <button onClick={logout}>
                Logout</button>
        </div>
    );
};
export default SongDetails;