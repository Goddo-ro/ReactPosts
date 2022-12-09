import React from 'react';
import Output from '../Output/Output'
import './styles.scss'

export default function PasswordChecker(props) {
    const [areLengthCorrect, setAreLengthCorrect] = React.useState(false);
    const [areEquals, setAreEquals] = React.useState(false);

    React.useEffect(() => {
        const password = props.value;
        const passwordAgain = props.valueAgain;

        if (password.length >= props.minLength) {
            setAreLengthCorrect(true);
        } else {
            setAreLengthCorrect(false);
        }

        if (password === passwordAgain) {
            setAreEquals(true);
        } else {
            setAreEquals(false);
        }

        if (areLengthCorrect && areEquals) {
            props.setter(true);
        } else {
            props.setter(false);
        }

    }, [props.value, props.valueAgain]);

    return (
        <div className="password-checker">
            {areLengthCorrect ? 
                <Output status={true} message="Length is correct" /> : 
                <Output statuc={false} message={`Min length is ${props.minLength}`} />
            }
            {areEquals ? 
                <Output status={true} message="Password are equals" /> : 
                <Output statuc={false} message="Password are not equals" />
            }
        </div>
    )
}