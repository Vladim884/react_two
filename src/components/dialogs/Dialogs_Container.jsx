import React from "react";
import Dialogs from './Dialogs';
import {addMessageAC, updateNewTextAC} from '../../redux/dialogs_reducer';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messageValue: state.dialogsReducer.newMessageText,
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
  }
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    addMessageBLL: (newMessageBody) => {
      dispatch(addMessageAC(newMessageBody));
    }
  }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);


// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
