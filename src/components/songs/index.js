import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchForSongsThunk} from "../../services/songs/song-thunks";
import {useState} from "react";

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
                            songs && songs.map(function(song, index) {
                                return (
                                    <li key={index} className="list-group-item ">
                                        <div className="card album-artwork">
                                            <img src={song.images[0]}  alt="Album cover"/>
                                            <div className="card">
                                                <div className="card-body">
                                                    <Link to="/song-details" state={{songDetails: song}} className="card-title">
                                                        <h5>{song.title}</h5>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
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