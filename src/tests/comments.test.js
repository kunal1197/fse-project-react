import {deleteUsersByUsername, login, signup} from "./services";
import {addComment} from "../services/comments/comment-service";

describe('new comment',  () => {

    // sample user
    const nasa = {
        username: 'NASA',
        password: 'nasa45',
        email: 'nasa@aliens.com'
    };

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        return signup(nasa);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        return deleteUsersByUsername(nasa.username);
    })

    test('new comment added', async () => {
        const user = await login(nasa)
        const  comment = {
            songID: 'dummy_song_id',
            comment: 'This is a great song',
            postedBy: user._id
        }
        const newComment = await addComment(comment)
        expect(newComment.comment).toEqual(comment.comment)
    })
});


