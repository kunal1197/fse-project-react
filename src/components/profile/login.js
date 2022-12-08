import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as service from "../../services/auth-service";
import Signup from "./signup";

export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    console.log("I'm somwhere in the code")
    const login = () => {
        console.log("Before line 11");
        service.login(loginUser)
            .then((user) => navigate('/songs'))
            .catch(e => alert(e));
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
                <button className="btn btn-primary mb-4" onClick={login}>Login</button>
            </form>
        </div>
    );
};
