import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

  let posts = props.state.posts.map(p => <Post message={p.message} like={p.like} />).reverse();
  let newPostEl = React.createRef();

  let newPostChange = () => {
    let text = newPostEl.current.value;
    props.dispatch({type: 'APDATE_NEW_POST_TEXT', newText: text});
  }

  let addPost = () => props.dispatch({type: 'ADD_POST'});
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostEl} onChange={newPostChange} value={props.state.newPostText} />
            </div>
            <button onClick={addPost}>New post</button>
          </div>
          <div className={s.posts}>
            {posts}
          </div>
        </div>
  );
}

export default MyPosts;
