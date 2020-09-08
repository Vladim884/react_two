import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
});


export default connect(mapStateToProps, {logOut})(HeaderContainer);