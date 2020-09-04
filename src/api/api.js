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
        console.warn('Obsolete method. Please use profileAPI.getProfile')
        return profileAPI.getProfile(userId);
    //     return instance.get(`profile/${userId}`)
    //   .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
      .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`/profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`/profile/status/`, {status});
    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logOut(){
        return instance.delete(`auth/login`);
    }

}



