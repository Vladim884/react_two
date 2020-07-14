let rerenderEntireTree = () => {
    console.log('state changed!');
}

const state = {
    profilePage: {
        posts: [
            { message: "Hello!", like: 3 },
            { message: "Hi! How are yiu?", like: 5 },
            { message: "Hello my dear frends!", like: 13 },
            { message: "Hi! How do yiu do?", like: 5 },
          ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Lena" },
            { id: 4, name: "Misha" },
            { id: 5, name: "Olya" },
            { id: 6, name: "Vasya" },
          ],
          messages: [
            { id: 1, message: "Hi!", likesCont: 12 },
            { id: 2, message: "How are you?", likesCont: 15 },
            { id: 3, message: "WELL!!", likesCont: 20 },
          ],
    },
    sidebar: {
        friendsName: [
            {id: 1, name: 'Kolya'},
            {id: 1, name: 'Olya'},
            {id: 1, name: 'Tolya'}


        ]
    }
  
};

export const addPostUA = (textMessage) => {
    debugger;
    let newPost = {
        message: textMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(); // now this function rerender whole tree

}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;   // rerenderEntireTree - global variable
}

export default state;
window.state = state;
