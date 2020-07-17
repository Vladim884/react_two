import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';
import {addPostActionCreator, newPostChangeActionCreator} from '../../../redux/profile_reducer'

const MyPosts = (props) => {
  debugger;
  let posts = props.state.posts.map(p => <Post message={p.message} like={p.like} key={p.id}/>).reverse();
  // let newPostEl = React.createRef();

  let newPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(newPostChangeActionCreator(text));
  }

  let addPost = () => props.dispatch(addPostActionCreator());
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea 
              // ref={newPostEl}
               onChange={newPostChange} 
               value={props.state.newPostText} 
               />
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
