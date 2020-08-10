import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import userFace from "../../image/user_face.jpg";

class Users extends React.Component {
  apiUrl = "https://social-network.samuraijs.com/api/1.0/";
  componentDidMount() {
    
    axios.get(`${this.apiUrl}users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`${this.apiUrl}users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
        this.props.setUsers(response.data.items);
        // debugger;
    });
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    // debugger;

    return (
      <div className={s.users_block}>
        <div>
          {pages.map((p) => {
            return <span className={this.props.currentPage === p && s.choosePage} 
                         onClick={(e)=>{this.onPageChanged(p);}} >{p}</span>;
          })}
          
        </div>
        <h1>Users</h1>
        {this.props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <div className={s.ava}>
              <img
                src={u.photos.small != null ? u.photos.small : userFace}
                // width="40%"
                alt="user"
              />
              <div>{u.name}</div>
              <div>{u.id}</div>
            </div>
            {u.followed ? (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                }}
              >
                follow
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                unfollow
              </button>
            )}
            <div>{u.status != null ? u.status : "without status"}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
