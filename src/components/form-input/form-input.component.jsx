import React, { useRef } from 'react';

import './form-input.styles.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
  const inputEl = useRef(null);

  return (
    <div className="group">
      <input
        ref={inputEl}
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            inputEl.current && inputEl.current.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
