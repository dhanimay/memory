import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Sequence extends Component {

  render(){
    let display = this.props.seqDisplay ? 'flex' : 'none';

    let containerStyle = {
        position: 'absolute',
        display: display,
        zIndex: 99,
        width: '20%',
        top: '4px',
        left: '40%',
        color: '#573e5c',
        backgroundColor: 'white',
        padding: '0 4px',
        borderRadius: '4px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };

    let seqStyle = {
        fontSize: '60px',
        fontWeight: 'bold',
        textShadow: ' 0 0 1px white',
        userSelect: 'none'
    };

    return (
    <div style={containerStyle}>
        <span>Length of Sequence</span>
        <span style={seqStyle}>{this.props.seqLength}</span>
    </div>

    );
  }
}

export default Sequence;
