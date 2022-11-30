import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchForSongsThunk} from "../../services/song-thunks";
import SongStats from "./song-stats";

const Songs = () => {
    const [title, setTitle] = useState('');
    const {songs} = useSelector((state) => state.songs)
    const dispatch = useDispatch();
    const searchForSongs = () => {
        setShow(showCommentBox)
        dispatch(searchForSongsThunk(title));
    }
    const showCommentBox = new Array(songs.length).fill(false);
    const [show, setShow] = useState(showCommentBox);
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
                                            <img src={song.image}  alt="Album cover"/>
                                            <div className="card">
                                                <div className="card-body">
                                                    <Link to={`/songs`} className="card-title"><h5>{song.title}</h5></Link>
                                                </div>
                                                <div className="card-footer bg-transparent">
                                                    <SongStats show={show} setShow={setShow} index={index}/>
                                                </div>
                                            </div>
                                        </div>
                                        {show[index] ? <div className="input-group mt-2">
                                            <input type="text" className="form-control" aria-label="With textarea" placeholder="Write a comment..."></input>
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon2">Comment</button>
                                        </div>: <div></div>}
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