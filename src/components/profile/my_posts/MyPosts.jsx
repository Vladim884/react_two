import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
  debugger;
  // let postsData = props.state.posts;

  let posts = props.state.posts.map(p => <Post message={p.message} like={p.like} />).reverse();
  // let addPostUA=props.addPostUA;
  let newPostEl = React.createRef();

  let newPostChange = () => {
    // debugger;
    let text = newPostEl.current.value;
    props.newPostChange(text);
  }

  let addPost = () => props.addPostUA();
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
