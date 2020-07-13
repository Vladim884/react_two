import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';

const Dialogs = (props) => {
  let DialogsData = props.state.DialogsData;

  let dialogs = DialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesData = props.state.messagesData

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
