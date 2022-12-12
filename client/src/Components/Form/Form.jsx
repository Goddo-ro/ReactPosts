import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import '../../Assets/Styles/formPages.scss';

export default function Form(props) {
    return(
        <div className="form-container">
            <div className="userForm">
                <IoMdCloseCircle className="close-btn" 
                                 onClick={props.close} />
                {props.children}
            </div>
        </div>
    )
}