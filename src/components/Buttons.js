import React from 'react';
import { Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';

export const Buttons = ({ playButton, pauseButton, slow, fast, clear, seed, gridSize }) => {
  const handleSelect = (event) => gridSize(event);

  return <div className="center">
    <ButtonToolbar>
      <Button className="btn btn-default" onClick={playButton}>
        Play
      </Button>
      <Button className="btn btn-default" onClick={pauseButton}>
        Pause
      </Button>
      <Button className="btn btn-default" onClick={slow}>
        Slow
      </Button>
      <Button className="btn btn-default" onClick={fast}>
        Fast
      </Button>
      <Button className="btn btn-default" onClick={clear}>
        Clear
      </Button>
      <Button className="btn btn-default" onClick={seed}>
        Seed
      </Button>
      <DropdownButton title='Grid Size'
                      id='size-menu'
                      onSelect={handleSelect}
      >
        <Dropdown.Item eventKey='1'>20x10</Dropdown.Item>
        <Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
        <Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
      </DropdownButton>
    </ButtonToolbar>

  </div>
}
