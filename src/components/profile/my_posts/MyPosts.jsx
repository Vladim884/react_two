import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
  // let postsData = props.state.posts;

  let posts = props.state.posts.map(p => <Post message={p.message} like={p.like} />);
  let newPostEl = React.createRef();
  let addPost = () => {
    let text = newPostEl.current.value;
    alert(text);
  };
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostEl} />
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
