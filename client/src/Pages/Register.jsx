import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Output from '../Components/Output/Output';
import { hashPassword } from '../Services/Utils/passwordHasher';
import '../Assets/Styles/formPages.scss';


export default function Register(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordAgain, setPasswordAgain] = React.useState("");
    const [isUsernameTaken, setIsUsernameTaken] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        setIsUsernameTaken(false);
    }, [username]);

    function register(event) {
        event.preventDefault();
        if (username.length < 5 || password.length < 5 || password !== passwordAgain) return;

        const user = username;
        const hashedPassword = hashPassword(password);

        const body = {
            username: user,
            password: hashedPassword
        }

        
        axios.post(`http://45.142.36.52:8080/api/person`, body)
            .then((res) => {
                props.setUser(res.data);
                navigate('/')
            })
            .catch((err) => {
                if (err.response.statusText === "Username is taken") {
                    setIsUsernameTaken(true);
                }
            }) 
    }

    return(
        <div className="userForm">
            <form onSubmit={register}>
                <h1>Welcome.</h1>
                <input type="text" className="username" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}></input>
                {isUsernameTaken && <Output status={false} message={"Username is taken"} />}
                {username.length > 4 ? <Output status={true} message="Length is correct" /> : 
                                    <Output statuc={false} message={`Min length is 5`} />}
                
                <input type="password" className="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}></input>
                <input type="password" className="password" placeholder="Password again"
                        onChange={(e) => setPasswordAgain(e.target.value)}></input>

                {password.length > 4 ? <Output status={true} message="Length is correct" /> : 
                                    <Output statuc={false} message={`Min length is 5`} />}

                {password === passwordAgain ? <Output status={true} message="Password are equals" /> : 
                                <Output statuc={false} message="Password are not equals" />}

                <button className="btn">Sign Up</button>
                <p className="smart-text">Saved with Goddo-ro's politics</p>
            </form>
        </div>
    )
}