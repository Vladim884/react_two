import React from "react";
import s from "./formControl.module.css";

export const FormControl = ({ input, meta, child, ...props }) => {// method rest: divided into parts
    debugger;
    const hasError = meta.touched && meta.error;
    return (
      <div className={s.form_control + " " + (hasError && s.error)}>
        <div>
          {props.children}
        </div>
        {hasError && <span className={s.form_control}>{meta.error}</span>}
      </div>
    );
  };

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps } /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps } /></FormControl>
  }