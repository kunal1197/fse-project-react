import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import * as service from "../../services/auth-service";

export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const login = () => {
        service.login(loginUser)
            .then((user) => navigate('/songs'))
            .catch(e => alert(e));
    }
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username"
                           onChange={(e) => setLoginUser({...loginUser, username: e.target.value})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" placeholder="Password"
                           onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}
                    />
                </div>
                <div className="form-group mb-3">
                    <button className="btn btn-block btn-primary mr-1" onClick={login}>Login</button>
                </div>
                <button
                    className="btn btn-block btn-primary text-white"
                    type="button"
                    onClick={logout}>
                    Logout
                </button>
            </form>
        </div>
    );
};
