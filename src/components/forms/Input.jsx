import React from "react";
import styles from "./Input.module.css";
import Error from "../interfaces/Error";

function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error error={error} />
    </div>
  );
}

export default Input;
