import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchForSongsThunk} from "../../services/songThunks";

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
                                <li className="list-group-item">
                                    <img className="poster-spacing" src={song.image} height={100} alt=""/>
                                    <Link to={`/songs`}>
                                        {song.title}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Songs;