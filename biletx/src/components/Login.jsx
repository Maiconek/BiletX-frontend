import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const { loginUser } = useContext(UserContext)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const userData = {
            username: username,
            password: password,
        }

        loginUser(userData)
    }
    return (
        <div className="box">
            <div className="container">
                <div className="top-header">
                    <span>Have an account?</span>
                    <header>Login</header>
                </div>
            <form method="POST" action="">
                <div className="input-field">
                   <input type="text" className="input" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}  />
                </div>

                <div className="input-field">
                    <input type="password" className="input" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
                </div>

                <div className="input-button">
                    <Link to="/"><input type="submit" className="submit" value="Login" onClick={handleLogin}/></Link>
                </div>

                <div className="bottom">
                    <div className="right">
                        <a className="que" href="/register">Don't have an account?</a> <br />
                        <a className="que" href="/">Back to main page</a>
                    </div>
                </div>
            </form>
        </div>
     </div>
    )
}

export default Login;