import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PasswordChecker from '../Components/PasswordChecker/PasswordChecker'
import '../Assets/Styles/formPages.scss';


export default function Register(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordAgain, setPasswordAgain] = React.useState("")
    const [arePasswordsCorrect, setArePasswordsCorrect] = React.useState(false)
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        if (!arePasswordsCorrect) return;

        axios.post(`http://45.142.36.52:8080/api/person`, { username })
            .then(res => navigate('/users'));
    }

    return(
        <div className="userForm">
            <form onSubmit={register}>
                <h1>Welcome.</h1>
                <input type="text" className="username" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" className="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}></input>
                <input type="password" className="password" placeholder="Password again"
                        onChange={(e) => setPasswordAgain(e.target.value)}></input>

                <PasswordChecker
                    minLength={5}
                    value={password}
                    valueAgain={passwordAgain}
                    setter={setArePasswordsCorrect}
                />

                <button className="btn">Sign Up</button>
                <p className="smart-text">Saved with Goddo-ro's politics</p>
            </form>
        </div>
    )
}