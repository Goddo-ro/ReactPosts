import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './styles.scss';

export default function Header(props) {
    const user = props.user;

    return (
        <header>
            <div className="container">
                <a href="https://github.com/Goddo-ro">
                    <img className="logo" src={logo} alt="logo"></img>
                </a>
                <div className="links">
                    <Link to={'/'}>Home</Link>
                </div>
                { Object.keys(user).length !== 0
                    ? <div className="user-section">
                        <Link>{user.username}</Link>
                        <a onClick={props.exit} className="exit">Exit</a>
                        </div>
                    : <div className="user-section">
                        <Link to={'/login'}>Sign In</Link>
                        <Link className='register-link' to={'/register'}>Sign Up</Link>
                        </div>
                }
            </div>
        </header>
    )
}