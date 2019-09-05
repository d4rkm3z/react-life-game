import React from 'react';

export const Box = ({ boxClass, boxId, row, col, selectBox }) => {
  return (
    <div className={boxClass}
         id={boxId}
         onClick={() => selectBox(row, col)}
    />
  );
};
