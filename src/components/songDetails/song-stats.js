import React, {useState} from "react";

const SongStats = ({newComment, setNewComment, newCommentHandler}) => {
    const [showCommentBox, setShowCommentBox] = useState(false);

    return(
        <div>
            <div className="row wd-symbols">
                <div className="col-6 text-center">
                    <button className="fa-regular fa-heart wd-grey-text wd-heart wd-icon-button"></button>
                    <span className="wd-icons-text">
                        234
                    </span>
                </div>
                <div className="col-6 text-center">
                    <button onClick={ () => setShowCommentBox(!showCommentBox)} className="fa-regular fa-comment wd-grey-text wd-icon-button"></button>
                    <span className="wd-icons-text" >
                        234
                    </span>
                </div>
            </div>
            <div className="row">
                {showCommentBox ? <
                    div className="input-group mt-2">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                            className="form-control"
                            aria-label="With textarea"
                            placeholder="Write a comment...">
                        </input>
                        <button
                            className="btn btn-primary text-white"
                            type="button"
                            id="button-addon2"
                            onClick={newCommentHandler}>
                                Comment
                        </button>
                    </div> :
                    <div></div>
                }
            </div>
        </div>

    )

}

export default SongStats