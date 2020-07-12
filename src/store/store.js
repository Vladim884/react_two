const store = {
    state: {
        messages: {
            message1: 'Hello!',
            message2: 'How are you?'
        },
        likes: {
            likeCount1: 5,
            likeCount2: 3,
        }
    },
    allerting(){
        alert('All right!');
    }
}

export default store;
window.store = store;
