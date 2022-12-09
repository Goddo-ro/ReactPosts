import React from 'react';
import axios from 'axios';


export default function Users(props) {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://45.142.36.52:8080/api/person')
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data);
                }
            })
    }, []);

    const usersElements = users.map((user) => <div>{user.username}</div>);

    return(
        <div className="home">
            {usersElements}
        </div>
    )
}