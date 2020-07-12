import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
  return (
        <div>
          my posts
          <div>
              <textarea />
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
