import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'e4fafe2c-01ea-415d-962d-f70071c3ef3a'
    }
});

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';


export const userAPi = {
    getUsers(currentPage=38, pageSize=100) {
        return instance.get(
          baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
      },
    setUserUnfollow(userId){
        return instance.delete(
            baseUrl + "follow/" + userId
        ).then(response => response.data);
    },
    setUserFollow(userId){
        return instance.post(
            baseUrl + "follow/" + userId
        , {}, ).
            then(response => response.data);
    }
}

