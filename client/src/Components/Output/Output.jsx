import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import './styles.scss';

export default function Output(props) {
    return (
        <div className={`output ${props.status ? 
                        'correct' : 'incorrect'}`}>

            {props.status 
                ? <AiOutlineCheck className='react-icons' style={{display: "block"}}/>
                : <RxCross1 className='react-icons' />
            }
            
            <div>{props.message}</div>
        </div>
    )
}