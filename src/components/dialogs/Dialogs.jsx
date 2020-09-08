import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./user_message/Message";
import { addMessageAC, updateNewTextAC } from "../../redux/dialogs_reducer";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../common/FormControl/Formscontrol";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {
  // debugger;
  let dialogs = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = props.messages.map((m) => (
    <Message message={m.message} likesCont={m.likesCont} />
  ));

  let addMessage = () => props.addMessageBLL();

  // let updateNewText = (e) => {
  //   let text = e.target.value;
  //   props.updateNewTextBLL(text);
  // }

  let addNewMessage = (values) => {
    props.addMessageBLL(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogs}</div>
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
  return (
    <form onSubmit={props.handleSubmit}>
      <Field validate={[required, maxLength30]} 
        component={Textarea}
        name="newMessageBody"
        placeholder="Please, enter your message!"
      />
      <button>Add Message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  // a unique name for the form
  form: "dialogsAddMessageForm",
})(AddMessageForm);

export default Dialogs;
