import React from 'react';

export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
  return (
    <div>
      {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
      <button
        // variant="contained"
        // color="primary"
        onClick={() => {
          console.log('Btn clicked!');
        }}
      >
        Theme Test
      </button>
    </div>
  );
};
