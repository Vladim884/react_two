import React from "react";
import s from "./dialogs.module.css";
import DialogItem from './dialogItem/DialogItem';
import Message from './user_message/Message';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reduser';
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {
  // debugger;
  let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

  let messages = props.messages.map(m => <Message message={m.message} likesCont={m.likesCont} />);
  
  let addMessage = () => props.addMessageBLL();

  // let updateNewText = (e) => {
  //   let text = e.target.value;
  //   props.updateNewTextBLL(text);
  // }

  let addNewMessage = (values) => {
    props.addMessageBLL(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div> 
      <div className={s.messages}>
        {messages}
        <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={'textarea'} name="newMessageBody" placeholder='Please, enter your message!'/>
        <button>Add Message</button>
  </form>
}

const AddMessageFormRedux = reduxForm({
  // a unique name for the form
  form: 'dialogsAddMessageForm'
})(AddMessageForm)

export default Dialogs;
