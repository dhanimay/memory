import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Counter extends Component {

  render(){
    let containerStyle = {
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    let numberStyle = {
        color: '#573e5c',
        fontSize: '250px',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: ' 0 0 1px white',
        userSelect: 'none'
    };

    return (
    <div style={containerStyle}>
        <span style={numberStyle}>{this.props.counterNumber}</span>
    </div>

    );
  }
}

export default Counter;
