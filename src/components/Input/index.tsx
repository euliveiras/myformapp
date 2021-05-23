import React, { useState, useRef, useEffect, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
//
import Tooltip from "../Tooltip";
//
import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  //
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },

      setValue: (ref, value) => {
        ref.current.value = value;
      },

      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <>
      <Tooltip error={error} />
      <div
        className={`
        ${styles.container} 
        ${isFocus || !!inputRef.current?.value ? styles.onFocus : ""}
        ${!!error ? styles.inputError : ""}
      `}
      >
        {Icon && <Icon size={20} />}
        <input
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
