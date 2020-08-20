import * as axios from "axios";

export const getUsers = (currentPage=38, pageSize=100) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    { withCredentials: true }
  );
};
