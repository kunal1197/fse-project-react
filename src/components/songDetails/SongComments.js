import React, {useState} from "react";
import {deleteCommentThunk, findCommentsThunk, updateCommentThunk} from "../../services/comments/comment-thunk";
import {useDispatch} from "react-redux";

const SongComments = ({comment, userID, songID}) => {

    const [editMode, setEditMode] = useState(false);

    const [edit, setEdit] = useState({comment: comment});

    const commentDate = comment.postedOn.split("T")[0];

    const dispatch = useDispatch();
    const deleteCommentHandler = () => {
        dispatch(deleteCommentThunk({userID, songID}));
    }

    const editCommentChangeHandler = (event) => {
        let editValue = event.target.value;
        const newEdit = {
                ...edit.comment,
                comment: editValue
            };
            setEdit(newEdit);
    }

    const updateCommentHandler = () => {
        setEdit(false)
        dispatch(findCommentsThunk(songID))
        dispatch(updateCommentThunk({userID, songID, edit}));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <b className="wd-float-left">Firstname Lastname</b>
                </div>
                <div className="col-1">
                    <div className="">
                        <i className="far fa-pen-to-square float-end wd-grey-text"
                           onClick={() => setEditMode(true)}></i>
                    </div>
                </div>
                <div className="col-1">
                    <div className="">
                        <i className="far fa-trash float-end wd-grey-text"
                           onClick={deleteCommentHandler}></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 ">
                    <div className="wd-grey-text wd-float-left">
                        User's username
                    </div>
                    <div className="wd-float-left wd-grey-text wd-post-summary-spacing">
                        • {commentDate}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    {
                        !editMode && comment.comment
                    }
                    {
                        editMode &&
                        <div className="input-group mt-2">
                            <input
                                type="text"
                                defaultValue={comment.comment}
                                onChange={editCommentChangeHandler}
                                className="form-control"
                                aria-label="With textarea">
                            </input>
                            <button
                                className="btn btn-primary text-white"
                                type="button"
                                id="button-addon2"
                                onClick={updateCommentHandler}>
                                Comment
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className="wd-float-done"></div>
        </li>
    )
}
export default SongComments;