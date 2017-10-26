import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Splash extends Component {

  render(){
    let display = this.props.splashDisplay ? 'flex' : 'none';

    let overlayStyle = {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(255, 255, 255, .1)',
        alignItems: 'center',
        justifyContent: 'center',
        display: display
    };

    let modalStyle = {
        width: '50%',
        height: '50%',
        backgroundColor: 'rgba(113, 172, 198, 0.85)',
        cursor: 'pointer',
        borderRadius: '50%',
        border: '3px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        userSelect: 'none'
    };

    let titleStyle = {
        font: 'italic bold 100px Fantasy',
        color: '#573e5c',
        textshadow: '0 0 1px white'
    };

    let clickInfo = {
        color: 'white', 
        fontSize: '20px',
        textshadow: '0 0 1px black'
    };

    return (
    <div style={overlayStyle} onClick={this.props.startPressed}>
        <div style={modalStyle} onClick={this.props.startPressed}>
            <span style={titleStyle}>Simon Says!</span>
            <span style={clickInfo}>click to start</span>
        </div>
    </div>
    );
  }
}

export default Splash;
