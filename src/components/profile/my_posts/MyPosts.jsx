import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
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
            <Post />
            <Post  />
          </div>
        </div>
  );
}

export default MyPosts;
