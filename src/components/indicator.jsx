import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Indicator extends Component {

  render(){
    let display = this.props.display ? 'flex' : 'none';

    let containerStyle = {
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        display: display,
        alignItems: 'center',
        justifyContent: 'center'
    };

    let textStyle = {
        color: '#573e5c',
        fontSize: '250px',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: ' 0 0 1px white',
        userSelect: 'none',
    };

    return (
    <div style={containerStyle}>
        <span style={textStyle}>{this.props.message}</span>
    </div>

    );
  }
}

export default Indicator;
