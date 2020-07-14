import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
  let postsData = props.state.posts;

  let posts = postsData.map(p => <Post message={p.message} like={p.like} />);
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea />
            </div>
            <button>New post</button>
          </div>
          <div className={s.posts}>
            {posts}
          </div>
        </div>
  );
}

export default MyPosts;
