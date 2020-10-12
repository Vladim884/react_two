import React from "react";
import { reduxForm, Field } from "redux-form";
import { createField, Input } from "../../common/FormControl/Formscontrol";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logOut } from "../../redux/auth_reducer";
import { Redirect } from "react-router-dom";
import style from '../../common/FormControl/formControl.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit}>
        {createField("Login", "email", Input, [required])}
        {/* <div>
          <Field placeholder="Login" name="email" component={Input} validate={[required]} />
        </div> */}
        {createField("Password", "password", Input, [required], {type: "password"})}
        {/* <div>
          <Field type="password" placeholder="Password" name="password" component={Input} validate={[required]} />
        </div> */}
         {createField(null, "rememberMe", Input, [], {type: "checkbox"}, 'Remember me')}
        {/* <div>
          <Field component={Input} name="rememberMe" type="checkbox" /> Remember me
        </div> */}
        <div>
          {error && <div className={style.formSummaryError}>
          {error}</div>}
        </div> 
        <div>
        {!error &&  <button>Login</button>}
        </div>
      </form>
  );
};


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if(props.isAuth){
    debugger;
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h5>Login</h5>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)


const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
}
export default connect(mapStateToProps, {login, logOut})(Login) ;
