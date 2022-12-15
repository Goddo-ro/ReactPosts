import React from 'react';
import axios from 'axios';
import Post from '../Components/Post/Post';
import comparePostWithSearch from '../Services/Utils/comparePostWithSearch';


export default function Home(props) {
    const [posts, setPosts] = React.useState([]);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        axios.get('http://45.142.36.52:8080/api/posts/')
            .then(res => setPosts(res.data));
    }, []);

    const postDivs = posts.map((post) => {
        if (comparePostWithSearch(post, search)) {
            return <Post
                title={post.title}
                content={post.content}
                username={post.username}
                user_id={post.user_id}
            />
        } else {
            return <></>
        }
    });

    return (
        <div className="posts container">
            <input type="text" placeholder="Search..." 
                onChange={(e) => setSearch(e.target.value)} />
            {props.user && <div className="">
                    <button className="btn">Create Post</button>
                </div>}
            {postDivs}
        </div>
    )
}