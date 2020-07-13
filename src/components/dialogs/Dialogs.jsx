import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
  )
}

const Message = (props) => {
  return (
  <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = (props) => {
  let DialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Olya'},
    {id: 6, name: 'Vasya'},

  ];

  
  let MessagesData = [
    {id: 1, message: 'Hi!', likesCont: 12},
    {id: 2, message: 'How are you?', likesCont: 15},
    {id: 3, message: 'WELL!!', likesCont: 20}
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
        <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>
      </div>
      <div className={s.messages}>
          <Message message={MessagesData[0].message} likesCont={MessagesData[0].likesCont} />
          <Message message={MessagesData[1].message} likesCont={MessagesData[0].likesCont} />
          <Message message={MessagesData[2].message} likesCont={MessagesData[0].likesCont} />
          
      </div>
         
    </div>
    
  );
};

export default Dialogs;
