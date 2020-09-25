import React from "react";
import { Field } from "redux-form";
import s from "./formControl.module.css";

export const FormControl = ({ input, meta: {touched, error}, children }) => {
  // method rest: divided into parts
  // debugger;
  const hasError = touched && error;
  return (
    <div className={s.form_control + " " + (hasError && s.error)}>
      <div>{children}</div>
      {hasError && <span className={s.form_control}>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createForm = (placeholder, name, component, validate, props={}, text='') => 
<div><Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} />
{text}</div>