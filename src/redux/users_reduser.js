const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: "Dima", status: 'boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 1, followed: false, fullName: "Sasha", status: 'peasant', location: {city: 'Minsk', country: 'Russia'}},
        { id: 1, followed: true, fullName: "Andrew", status: 'kozak', location: {city: 'Minsk', country: 'Ukraine'}},
      ],
}

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === userId){
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === userId){
                        return {...u, followed: fakse}
                    }
                    return u;
                }),
            }

    
        default:
            return state;
    }

}

export const folowAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
  

export default usersReducer;