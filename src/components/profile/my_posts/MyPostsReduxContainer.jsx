import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { newPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';

let mapStateToProps = (state) => {
  return {
    postValue: state.profileReducer.newPostText,
    posts: state.profileReducer.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  addPostBLL: (newPostText) => dispatch(addPostActionCreator(newPostText))
 }
}

let MyPostsReduxContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsReduxContainer;
