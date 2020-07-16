import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';
import {addMessageAC, updateNewTextAC} from '../../redux/store';

const Dialogs = (props) => {
  // debugger;
  let dialogsData = props.state.dialogs;
  let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesData = props.state.messages

  let messages = messagesData.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  let newMessageEl = React.createRef();
  
  let addMessage = () => {
    let text = newMessageEl.current.value;
    props.dispatch(addMessageAC(text));
    newMessageEl.current.value = '';
  }

  let updateNewText = () => {
    let text = newMessageEl.current.value;
    props.dispatch(updateNewTextAC(text));
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div> 
      <div className={s.messages}>
      <div>
        <textarea ref={newMessageEl} onChange={updateNewText} value={props.state.newMessageText}/>
        <button onClick={addMessage}>Add Nessage</button>
      </div>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
