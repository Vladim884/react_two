import React from "react";
import Dialogs from './Dialogs';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reduser';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  // debugger;
  return {
    messageValue: state.dialogsReducer.newMessageText,
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
  }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageBLL: () => {
      dispatch(addMessageAC());
    },
    updateNewTextBLL: (text) => {
      dispatch(updateNewTextAC(text));
    }
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
