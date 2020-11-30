import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsSet = props.posts;
    let postsElements = postsSet.map(p => <Post id={p.id} post={p.post} key={p.id} likes={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (text) => {
        let action = newPostElement.current.value;
        props.updateNewPostText(action);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    className={s.textArea}
                    ref={newPostElement}
                    // placeholder={'Enter message'}
                    onChange={onPostChange}
                    value={props.newPostText}/>
                </div>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
