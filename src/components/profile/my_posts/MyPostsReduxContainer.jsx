import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { newPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';

let mapStateToProps = (state) => {
  // debugger;
  return {
    postValue: state.profileReducer.newPostText,
    posts: state.profileReducer.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  newPostChangeBLL: (text) => dispatch(newPostChangeActionCreator(text)),

  addPostBLL: (message, id) => dispatch(addPostActionCreator(message, id))
 }
}

let MyPostsReduxContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsReduxContainer;
