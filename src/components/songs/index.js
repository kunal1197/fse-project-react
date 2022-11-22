import {useState} from "react";
import {Link} from "react-router-dom";

const Songs = () => {
    const [title, setTitle] = useState('Avatar');
    const [songs, setSong] = useState([])

    return(
        <div>
            <h1>Songs</h1>
            <div className="row">
                <div className="col">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="form-control"/>
                </div>
                <div className="col">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
            <ul className="list-group">
                {
                    songs && songs.map(songs =>
                        <li className="list-group-item">
                            <img className="poster-spacing" src={songs.Poster} height={100} alt=""/>
                            <Link to={`/movies/${songs.imdbID}`}>
                                {songs.Title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Songs;