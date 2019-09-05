import React from 'react';
import { Box } from './Box';

export const Grid = ({ cols, rows, gridFull, selectBox }) => {
  const rowsArr = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let boxId = i + '_' + j;

      let boxClass = gridFull[i][j] ? 'box on' : 'box off';
      rowsArr.push(
        <Box boxClass={boxClass}
             key={boxId}
             boxId={boxId}
             row={i}
             col={j}
             selectBox={selectBox}
        />
      )
    }
  }

  return (
    <div className='grid' style={{ width: cols * 16 }}>
      { rowsArr }
    </div>
  );
};
