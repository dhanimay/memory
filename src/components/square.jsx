import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Square extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps !== nextState;
  }


  render(){
    let dimmer = this.props.dimmed ? 'rgba(0, 0, 0, .3)' : '';

    let squareStyle = {
        color: 'white',
        float: 'left',
        width: '50%',
        height: '50%',
        textAlign: 'center',
        position: 'relative',
        border: '1px solid black',
        boxSizing: 'border-box',
        cursor: 'pointer',
        backgroundColor: this.props.backgroundColor
    };

    let dimmingStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: dimmer
    };

    return (
    <div style={squareStyle} onClick={this.props.clickSquare}>
      <div style={dimmingStyle}></div>
    </div>

    );
  }
}

export default Square;
