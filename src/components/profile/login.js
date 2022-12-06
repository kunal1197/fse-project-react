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
            <h1>Hello</h1>-
            <h1>Login</h1>
            <input onChange={(e) =>
                setLoginUser({...loginUser,
                    username: e.target.value})}/>
            <input onChange={(e) =>
                setLoginUser({...loginUser,
                    password: e.target.value})}/>
            <button onClick={login}>
                Login</button>
        </div>
    );
};
