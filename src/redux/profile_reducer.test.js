import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profile_reducer';

let state = {
    posts: [
      { id: 1, message: "Hello!", like: 3 },
      { id: 2, message: "Hi! How are yiu?", like: 5 },
      { id: 3, message: "Hello my dear frends!", like: 13 },
      { id: 4, message: "Hi! How do yiu do?", like: 5 },
    ]
  };
it('length of posts should br encremented', () => {
    //test dats
    let action = addPostActionCreator('it-kama');
    
    //test action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(5);
  });

  it('message of new posts should be "it-kama"', () => {
    //test dats
    let action = addPostActionCreator('it-kama');
    
    //test action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts[4].message).toBe('it-kama');
  });

  it('after deleting length of posts should be decrement', () => {
    //test dats
    let action = deletePostActionCreator(1);
    
    //test action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(3);
  });

  it('after deleting length of posts shouldn`t be decrement if id was incorrect', () => {
    //test dats
    let action = deletePostActionCreator(1000);
    
    //test action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(4);
  });

