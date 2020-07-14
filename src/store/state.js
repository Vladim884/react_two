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

export default state;
window.state = state;
