import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchForSongsThunk} from "../../services/songThunks";
import SongStats from "./songStats";

const Songs = () => {
    const [title, setTitle] = useState('');
    const {songs} = useSelector((state) => state.songs)
    const dispatch = useDispatch();
    const searchForSongs = () => {
        dispatch(searchForSongsThunk(title));
    }
    return(
        <div>
            <h1>Songs</h1>
            <div className="row">
                <div className="col">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder={"New Song"}
                        className="form-control"/>
                </div>
                <div className="col">
                    <button onClick={searchForSongs} className="btn btn-primary">Search</button>
                </div>
            </div>
            <div className="row">
                <div className="col results-spacing">
                    <ul className="list-group">
                        {
                            songs && songs.map(song =>
                                <li className="list-group-item ">
                                    <li className="card album-artwork">
                                        <img src={song.image}  alt="Album cover"/>
                                        <div className="card">
                                            <div className="card-body">
                                                <Link to={`/songs`} className="card-title"><h5>{song.title}</h5></Link>
                                            </div>
                                            <div className="card-footer bg-transparent">
                                                <SongStats/>
                                            </div>
                                        </div>


                                    </li>
                                </li>
                            )
                        }
                        {
                            songs.length === 0 &&
                            <h4> No Results. </h4>
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Songs;