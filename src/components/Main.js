import React, { useEffect, useState } from 'react';
import { Grid } from './Grid';
import { Buttons } from './Buttons';

export const Main = () => {
  const [speed, rows, cols] = [100, 40, 50];
  let intervalId;

  // eslint-disable-next-line
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState(Array(cols).fill().map(() => Array(cols).fill(false)));

  useEffect(() => {
    seed();
    playButton();
  }, []);

  const selectBox = (row, col) => {
    let gridCopy = [...gridFull];
    gridCopy[row][col] = !gridCopy[row][col];
    setGridFull(gridCopy);
  };

  const seed = () => {
    let gridCopy = [...gridFull];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) gridCopy[i][j] = true;
      }
    }
    setGridFull(gridCopy);
  };

  const playButton = () => {
    clearInterval(intervalId);
    intervalId = setInterval(play, speed);
  };

  const pauseButton = () => {
    clearInterval(intervalId);
  };

  const play = () => {
    let g = gridFull;
    let g2 = [...gridFull];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < rows - 1) if (g[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < rows - 1 && cols - 1) if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }

    setGridFull(g2);
    setGeneration((generation) => generation + 1);
  };

  const slow = () => {
  };

  const fast = () => {
  };

  const clear = () => {
  };

  const gridSize = () => {
  };

  return (<div>
      <h1>React Game of Life</h1>
      <Buttons playButton={playButton}
               pauseButton={pauseButton}
               slow={slow}
               fast={fast}
               clear={clear}
               seed={seed}
               gridSize={gridSize}
      />
      <Grid gridFull={gridFull}
            rows={rows}
            cols={cols}
            selectBox={selectBox}/>
      <h2>Generations: {generation}</h2>
    </div>
  )
};
