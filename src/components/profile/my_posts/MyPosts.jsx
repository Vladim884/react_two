import React from 'react';
import s from'./my_posts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
  // debugger;
  let posts = props.posts.map(p => <Post message={p.message} like={p.like} key={p.id}/>).reverse();
  // let newPostEl = React.createRef();

  let newPostChange = (e) => {
    let text = e.target.value;
    props.newPostChangeBLL(text);
  }

  let addPost = () => 
    props.addPostBLL();
  return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea 
              // ref={newPostEl}
               onChange={newPostChange} 
               value={props.postValue} 
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
