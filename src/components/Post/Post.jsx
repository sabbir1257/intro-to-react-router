import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, body, title} = post;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h5>Id: {id} </h5>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post${id}`}><button>Show Post Detail</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;