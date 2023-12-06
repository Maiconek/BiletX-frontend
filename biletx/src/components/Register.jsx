import React from "react";

function Register() {
    return (
        <div class="box">
            <div class="container">
                <div class="top-header">
                    <span>Dont't have an account?</span>
                    <header>Register</header>
                </div>
            <form method="POST" action="">
                <div class="input-field">
                    <input type="text" class="input" name="username" placeholder="Username" required />
                </div>

                <div class="input-field">
                    <input type="password" class="input" name="password" placeholder="Password" required />
                </div>

                <div class="input-button">
                    <input type="submit" class="submit" value="Login" />
                </div>

                <div class="bottom">
                    <div class="right">
                        <a class="que" href="/login">Already have an account?</a> <br />
                        <a class="que" href="/">Back to main page</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Register;