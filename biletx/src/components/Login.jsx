import React from "react";

function Login() {
    return (
        <div class="box">
            <div class="container">
                <div class="top-header">
                    <span>Have an account?</span>
                    <header>Login</header>
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
                        <a class="que" href="/">Don't have an account?</a>
                    </div>
                </div>
            </form>
        </div>
     </div>
    )
}

export default Login;