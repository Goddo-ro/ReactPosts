import React from 'react';
import '../Assets/Styles/formPages.scss';

export default function Login(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function login(event) {
        event.preventDefault();
        if (!username || !password) return;
    }

    return(
        <div className="userForm">
            <form>
                <h1>Welcome.</h1>
                <input type="text" className="username" placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" className="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}></input>
                <button className="btn">Sign In</button>
                <p className="smart-text">Saved with Goddo-ro's politics</p>
            </form>
        </div>
    )
}