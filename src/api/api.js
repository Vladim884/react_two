import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // baseURL - URL - BIG LETTER!
    withCredentials: true,
    headers: {
        'API-KEY': 'e4fafe2c-01ea-415d-962d-f70071c3ef3a'
    }
});

export const userAPI = {
    getUsers(currentPage=38, pageSize=100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
      },
    follow(userId){
        return instance.post(`follow/${userId}`).
            then(response => response.data);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    
    getProfile(userId){
        return instance.get(`profile/${userId}`)
      .then(response => response.data)
    }
}

export const profileAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
}



