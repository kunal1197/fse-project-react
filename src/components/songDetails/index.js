import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createCommentThunk, findCommentsThunk} from "../../services/comments/comment-thunk";
import SongComments from "./SongComments";
import {useLocation, useNavigate} from "react-router-dom";
import dateFormat from "dateformat";
import SongStats from "./song-stats";
import * as service from "../../services/auth-service";

const SongDetails = () => {
    const [user, setUser] = useState({});
    const location = useLocation()
    const navigate = useNavigate()
    const song = location.state.songDetails

    //Load comments from store
    const {comments} = useSelector((state) => state.comments)
    let [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    // Add a new comment
    const newCommentHandler = () => {
        const newCommentBody = {
            songID: song.id,
            comment: newComment,
            postedBy: "me"
        }
        dispatch(createCommentThunk(newCommentBody))
    }

    useEffect(() => {
        dispatch(findCommentsThunk(song.id))
    }, [])

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

    // Formatting data
    const artists = song.artists.join(', ')
    const minutes = Math.floor(song.songDurationInMs / 60000);
    const seconds = ((song.songDurationInMs % 60000) / 1000).toFixed(0);
    const duration = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    const releaseYear = dateFormat(song.releaseYear+"T08:59:00.000Z", "mmmm dS, yyyy")

    return(
        <div>
            <div className="p-2">
                <div className="mb-2 position-relative">
                    <img className="w-100 wd-song-banner" src={`${song.images[0]}`} alt={song.title}/>
                </div>
                <h2 className="fw-bolder">{song.title}</h2>
                <div>
                    <div className="pt-0 pb-4">
                        <span  className="h4">{artists} </span>
                    </div>
                    <p>
                        <i className="fa-sharp fa-solid fa-album me-2"></i>
                        {song.album}
                        <i className="far fa-stopwatch ms-3 me-2"></i>
                        {duration}
                        <i className="far fa-calendar ms-3 me-2"></i>
                        {releaseYear}
                        <i className="far fa-link ms-3 me-2"></i>
                        <a href={`${song.songLink}`} className=" text-dark">Song link</a>
                        <br/>
                    </p>
                    <hr/>
                    <SongStats newComment={newComment}
                               setNewComment={setNewComment}
                               newCommentHandler={newCommentHandler}
                    />
                    <hr/>
                </div>
                {
                    comments.length > 0  &&
                    <div>
                        <div className="wd-grey-text">
                            Comments
                        </div>
                        <ul className="list-group">
                            {
                                comments.map((comment, index) =>
                                    <SongComments
                                        key={comment._id}
                                        comment={comment}
                                        userID={"me"}
                                        songID={song.id}
                                        user={user}
                                    />
                                )
                            }
                        </ul>
                    </div>
                }
                {
                    comments.length === 0 &&
                    <div>
                        <div className="wd-grey-text">
                            No comments
                        </div>
                    </div>
                }
                <button
                    className="btn btn-primary text-white mt-3"
                    type="button"
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};
export default SongDetails;