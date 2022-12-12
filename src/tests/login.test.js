import axios from "axios";
import * as services from "./services";
import {deleteUsersByUsername, login, signup} from "./services";

const MOCKED_USERS = [
    {
        username: 'ellen_ripley',
        password: 'lv426',
        email: 'repley@weyland.com'
    },
    {
        username: 'sarah_conor',
        password: 'illbeback',
        email: 'sarah@bigjeff.com'
    },
]

test("Mocked hello world axios works", async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {message: 'hello world'} }));
    const response = await axios.get();
    expect(response.data.message).toEqual('hello world')
});

test("Find all users mock works", async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {users: MOCKED_USERS} }));
    const response = await services.findAllUsers();
    const users = response.users;
    expect(users.length).toEqual(MOCKED_USERS.length);
    users.forEach((user, nth) => {
        expect(user.username).toEqual(MOCKED_USERS[nth].username);
    });
});

describe('signup and login',  () => {

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

    test('logged in user equal to user who signed up', async () => {
        const user = await login(nasa)
        expect(user.username).toEqual(nasa.username)
    })
});


