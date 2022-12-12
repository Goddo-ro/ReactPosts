import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Output from '../Components/Output/Output';
import { comparePasword } from '../Services/Utils/passwordHasher';
import blurAction from '../Services/Actions/blurAction';


export default function Login(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userExists, setUserExists] = React.useState(true);
    const [passwordEquals, setPasswordEquals] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        blurAction();
    }, []);

    function login(event) {
        event.preventDefault();
        if (username === "" || password === "") return;

        axios.get(`http://45.142.36.52:8080/api/person/byName/${username}`)
            .then(res => {
                const person = res.data;

                if (!person) {
                    setUserExists(false);
                } else {
                    const result = comparePasword(password, person.password);
                    if (result) {
                        props.setUser(person);
                        props.close();
                    } else {
                        setPasswordEquals(false);
                    }
                }
            })
    }

    return(
        <form onSubmit={login}>
            <h1>Welcome.</h1>
            <input type="text" className="username" placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setUserExists(true);
                        setPasswordEquals(true);
                    }}>        
            </input>
            {!userExists && <Output status={false} message={"User does not exist"} />}

            <input type="password" className="password" placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordEquals(true);
                    }}>        
            </input>
            {!passwordEquals && <Output status={false} message={"Passwords do not equal"} />}

            <button className="btn">Sign In</button>
            <p className="smart-text">Saved with Goddo-ro's politics</p>
        </form>
    )
}