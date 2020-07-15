import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';

const Dialogs = (props) => {
  let dialogsData = props.state.dialogs;

  let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesData = props.state.messages

  let messages = messagesData.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  let newMessageEl = React.createRef();
  let addMessage = () => {
    let text = newMessageEl.current.value;
    props.dispatch({type: 'ADD_MESSAGE', newText: text});
    newMessageEl.current.value = '';
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div> 
      <div className={s.messages}>
      <div>
        <textarea ref={newMessageEl} />
        <button onClick={addMessage}>Add Nessage</button>
      </div>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
