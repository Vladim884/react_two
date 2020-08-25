import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reduser';
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  // debugger;
  let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

  let messages = props.messages.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  
  let addMessage = () => props.addMessageBLL();

  let updateNewText = (e) => {
    // debugger;
    let text = e.target.value;
    props.updateNewTextBLL(text);
  }

  if(!props.isAuth) return <Redirect to={'/login'} />
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div> 
      <div className={s.messages}>
        {messages}
        <div>
        <textarea onChange={updateNewText} value={props.messageValue} placeholder='Please, enter your message!'/>
        <button onClick={addMessage}>Add Message</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
