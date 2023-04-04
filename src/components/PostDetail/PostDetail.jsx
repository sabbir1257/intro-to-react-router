import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, useId, title, body} = post;
    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Details about your post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handelGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;