import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // baseURL - URL - BIG LETTER!
    withCredentials: true,
    headers: {
        'API-KEY': 'b8cd8d9d-0ead-43e0-a593-cebd72413e5b'// last key
    }
});

export const userAPI = {
    getUsers(currentPage=38, pageSize=100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
      },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
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
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`/profile`, profile);
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



