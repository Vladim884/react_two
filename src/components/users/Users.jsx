import React from 'react'

const Users = (props) => {
    debugger;
  return  <div>
      {
      props.users.map(u => <div key={u.id}>{u.fullName}</div>)
    }
  </div>
  
}

export default Users

      
  
