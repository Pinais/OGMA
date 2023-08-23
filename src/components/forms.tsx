import React from "react";
import { styles } from "./styles/inputStyles";

export interface InputProps {
  formLabel: string;
  formInputType: string;
  formHelp: string;
  buttonText?: string;
}

export const DefaultInput: React.FC<InputProps> = ({
  formLabel,
  formInputType,
  formHelp,
}) => {
  return (
    <div
      className="mb-3"
      style={styles.form}
    >
      <label
        htmlFor="inputFile"
        className="form-label"
        style={styles.labelText}
      >
        {formLabel}
      </label>
      <br />
      <input
        type={formInputType}
        aria-describedby="formHelp"
        style={styles.textField}
      />
      <div>{formHelp}</div>
    </div>
  );
};

export const ButtonInput: React.FC<InputProps> = ({
  formLabel,
  formInputType,
  formHelp,
  buttonText,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="inputFile"
        className="form-label"
        style={styles.labelText}
      >
        {formLabel}
        <button style={styles.primaryButton}>{buttonText}</button>
      </label>
      <br />
      <input
        type={formInputType}
        aria-describedby="formHelp"
        style={styles.textField}
      />
      <div>{formHelp}</div>
    </div>
  );
};
