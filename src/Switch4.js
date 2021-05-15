/*
 * Code taken from the following tutorial:
 * https://upmostly.com/tutorials/build-a-react-switch-toggle-component
*/

import React from 'react';
import './App.css';

// Switch specifications
const Switch4 = () => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new4`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new4`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch4;