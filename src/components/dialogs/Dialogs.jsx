import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reduser';

const Dialogs = (props) => {
  debugger;
  // let dialogsData = props.state.dialogs;
  let dialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  // let messagesData = props.state.messages

  let messages = props.messagesData.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  // let newMessageEl = React.createRef();
  
  let addMessage = () => props.addMessageBLL();

  let updateNewText = (e) => {
    // debugger;
    let text = e.target.value;
    props.updateNewTextBLL(text);
  }
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
