import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';

const Dialogs = (props) => {
  let DialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Olya'},
    {id: 6, name: 'Vasya'},

  ];

  let dialogs = DialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesData = [
    {id: 1, message: 'Hi!', likesCont: 12},
    {id: 2, message: 'How are you?', likesCont: 15},
    {id: 3, message: 'WELL!!', likesCont: 20}
  ];

  let messages = messagesData.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
      {dialogs}
      </div> 
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
