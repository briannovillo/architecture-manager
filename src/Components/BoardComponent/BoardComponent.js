import React, { PureComponent } from 'react';
import './BoardComponent.css';
import Draggable from 'react-draggable';

export default class BoardComponent extends PureComponent {
  render() {
    return (
      <Draggable
        handle=".header"
        defaultPosition={{x: Math.random() * (640 - 0) + 0, y: Math.random() * (480 - 0) + 0}}
        position={null}
        grid={[25, 25]}>
          <div className="component">
            <div className="header">Click here to move</div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
          </div>
      </Draggable>
    );
  }
}