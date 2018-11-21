import React, { PureComponent } from 'react';
import './Board.css';
import BoardComponent from '../BoardComponent/BoardComponent';

export default class Board extends PureComponent {

  state = {
    components: [
      { "name": 'Pista', "value": <BoardComponent/> },
      { "name": 'Auto', "value": <BoardComponent/> },
      { "name": 'Piloto', "value": <BoardComponent/> },
      { "name": 'Mecánico', "value": <BoardComponent/> }
     ]
  };

  render() {
    return (
      <div className="board">
          { this.state.components.map(component => component.value) }
      </div>
    );
  }
}
