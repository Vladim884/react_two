import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {
  // debugger;
  let posts = props.posts.map(p => <Post message={p.message} like={p.like} key={p.id}/>).reverse();

  let addNewPost = (values) => {
    props.addPostBLL(values.newPostText);

  }
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <AddPostFormRedux onSubmit={addNewPost} />
          </div>
          <div className={s.posts}>
            {posts}
          </div>
        </div>
  );
}

const AddPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'textarea'} name='newPostText' />
    </div>
    <button>New post</button>
  </form>
  );
}

const AddPostFormRedux = reduxForm({form: 'postsAddPostForm'})(AddPostForm);

export default MyPosts;
