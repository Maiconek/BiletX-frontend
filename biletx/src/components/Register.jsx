import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Register() {
    const { registerUser } = useContext(UserContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = () => {
        const userData = {
            username: username,
            password: password
        };
        registerUser(userData)
    }

    return (
        <div className="box">
            <div className="container">
                <div className="top-header">
                    <span>Dont't have an account?</span>
                    <header>Register</header>
                </div>
            <form method="POST" action="">
                <div className="input-field">
                    <input type="text" className="input" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="input-field">
                    <input type="password" className="input" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="input-button">
                    <Link to="/"><input type="submit" className="submit" value="Register" onClick={handleRegister} /></Link>
                </div>

                <div className="bottom">
                    <div className="right">
                        <a className="que" href="/login">Already have an account?</a> <br />
                        <a className="que" href="/">Back to main page</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Register;