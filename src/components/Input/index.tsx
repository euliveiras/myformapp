import React, { HTMLAttributes, useState,  } from "react";
import { IconBaseProps } from "react-icons";
//
import styles from "./styles.module.css";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const [inputText, setInputText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  return (
    <div
      className={`
        ${styles.container} 
        ${isFocus || !!inputText ? styles.onFocus : ""}
      `}
    >
      {Icon && <Icon size={20} />}
      <input
        name={name}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
