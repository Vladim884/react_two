import React from "react";
import s from "./dialogs.module.css";
// import DialogItem from './dialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './user_message/Message';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reduser';
import DialogItem from "./dialogItem/DialogItem";

const DialogsContainer = (props) => {
  debugger;
  let messageValue = props.state.newMessageText
  let dialogsData = props.state.dialogs;
  // let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesData = props.state.messages

  // let messages = messagesData.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  // let newMessageEl = React.createRef();
  
  let addMessageBLL = () => {
    props.dispatch(addMessageAC());
  }

  let updateNewTextBLL = (text) => {
    props.dispatch(updateNewTextAC(text));
  }
  return (
    <div>
      <Dialogs addMessageBLL={addMessageBLL}
               updateNewTextBLL={updateNewTextBLL} 
               messageValue={messageValue}
               dialogsData={dialogsData} 
               messagesData={messagesData} />
    </div>
  );
};

export default DialogsContainer;
