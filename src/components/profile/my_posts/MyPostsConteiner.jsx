import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';
import MyPosts from './MyPosts';

import {addPostActionCreator, newPostChangeActionCreator} from '../../../redux/profile_reducer'
// import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  // debugger;
  let postValue = props.state.newPostText;
  let posts = props.state.posts.map(p => <Post message={p.message} like={p.like} key={p.id}/>).reverse();
  // let newPostEl = React.createRef();

  let newPostChangeBLL = (text) => {props.dispatch(newPostChangeActionCreator(text))};
  

  let addPostBLL = () => props.dispatch(addPostActionCreator());
  return (
        <div>
          <MyPosts posts={posts} 
                   addPostBLL={addPostBLL}
                   newPostChangeBLL={newPostChangeBLL} 
                   postValue={postValue}
                   />
        </div>
  );
}

export default MyPostsContainer;
