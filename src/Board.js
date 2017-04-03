import React, { Component } from 'react';
import './Board.css';


class Board extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render(){
    return (
      <div className="Board">
        <div className="BreakPlz"></div>
        <div className="BoardCard grave">
          <div className="sides"></div>
        </div>
        <div className="BoardCard escape">
          <div className="sides"></div>
        </div>
      </div>
    )
  }

}

export default Board
