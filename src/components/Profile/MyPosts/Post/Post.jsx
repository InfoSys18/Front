import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    const postId = props.id;
    const postPost = props.post;
    const postLikes = props.likes;

    return (
        <div className={s.item}>
            <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"/>
            Post# {postId} - {postPost}
            <div>
                <span>likes count {postLikes}</span>
            </div>
        </div>
    );
};

export default Post;