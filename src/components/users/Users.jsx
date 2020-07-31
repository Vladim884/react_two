import React from 'react'

const Users = (props) => {
    debugger;
  return  <div>
    <h1>user-user</h1>
      {
      props.users.map(u => <div key={u.id}>{u.fullName}</div>)
    }
  </div>
  
}

export default Users

      
  
