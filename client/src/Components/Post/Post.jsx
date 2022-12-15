import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


export default function Post(props) {
    return (
        <div className="post">
            <h3>{props.title}</h3>
            <Link href={`users/${props.user_id}`}>{props.username}</Link>
            <p>{props.content}</p>
        </div>
    );
}