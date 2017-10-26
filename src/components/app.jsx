import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';
import Splash from './startSplash.jsx';
import Sequence from './sequence.jsx';
import Indicator from './indicator.jsx';
import Counter from './counter.jsx';
import { Router, Route, Link } from 'react-router';


class App extends Component{
  constructor(){
    super();
    this.state = {
      backgroundColor: ['#6666ff', '#66b366', '#ffc966', '#ff6666'], //blue, green, orange, red
      dimmed: [true, true, true, true],
      numberOfSquares: 4,
      splashDisplay: true,
      counterDisplay: 'none',
      indicatorDisplay: false,
      seqDisplay: false,
      playerInput: false, 
      counterNumber: 3,
      counterStart: 3,
      sequence: [],
      playerChoices: [],
      clickSquare: this.clickSquare.bind(this), 
      startPressed: this.startPressed.bind(this)
    };
  }


  clickSquare(index){
    if(!this.state.playerInput) return; 

    let dimmed = this.state.dimmed;
    let playerChoices = this.state.playerChoices;
    let len = playerChoices.length;

    dimmed[index] = false;
    playerChoices.push(index);

    this.setState({dimmed: dimmed, playerChoices: playerChoices});

    if(this.state.sequence[len] !== index){
      this.gameOver();
      return;
    }

    setTimeout(() => {
      dimmed[index] = true;
      this.setState({dimmed: dimmed});
    }, 250);

    if(this.state.sequence.length === this.state.playerChoices.length){
      this.setState({counterDisplay: true, playerChoices: []});
      this.countDown();
    }
  }

  startPressed(event){
    event.stopPropagation();
    this.setState({splashDisplay: false, counterDisplay: 'block', seqDisplay: true});
    this.countDown();
  }

  countDown(){
    let count = this.state.counterNumber;
    if(count > 0){
      setTimeout(() => {
        count--;
        this.setState({counterNumber: count});
        this.countDown();
      }, 1000);
    }else{
      this.setState({counterDisplay: 'none'});
      this.setState({counterNumber: this.state.counterStart});
      this.addNewStep();
      console.log('sequence: ', this.state.sequence);
      this.runSequence();
    }
  }

  runSequence(){
    this.showSquare(this.state.sequence);
  }

  showSquare(seq, count = 0){
      let dimmed = this.state.dimmed;

      if(count <= seq.length){
        setTimeout(() => {
          if(count > 0) dimmed[seq[count - 1]] = true;
          if(seq[count] !== undefined) dimmed[seq[count]] = false;
          count++;
          this.setState({dimmed: dimmed});
          this.showSquare(seq, count);
        }, 500);
      }else{
        //player can input after sequence
        this.signalPlayerInput();
      }
  }

  signalPlayerInput(){
    this.setState({indicatorDisplay: true, indicatorMessage: 'GO!'});
    setTimeout(() => {
      this.setState({indicatorDisplay: false, playerInput: true});
    }, 500);
  }

  addNewStep(){
    let seq = this.state.sequence;
    console.log('seq:', seq);
    seq.push(Math.round(Math.random() * 3))
    this.setState({
      sequence: seq
    });
  }

  gameOver(){
    this.setState({indicatorDisplay: true, indicatorMessage: 'Game Over'});
    setTimeout(() => {
      this.resetGame();
    }, 3000);
  }

  resetGame(){
    this.setState({
      dimmed: [true, true, true, true],
      splashDisplay: true,
      counterDisplay: 'none',
      indicatorDisplay: false,
      seqDisplay: false,
      playerInput: false,
      sequence: [],
      playerChoices: [],
    });
  }

  render (){
    const squares = [];
    let squareColor, dimmed;
    let counter = ''; 
    let seqLength = this.state.sequence.length - 1 < 0 ? 0 : this.state.sequence.length;

    for(let i = 0; i < this.state.numberOfSquares; i++){

      //closure insures 'i' evaluates correctly
      squareColor = ((index) => {
         return ((index) => {
            return this.state.backgroundColor[index];
          })(index) 
      })(i);

      dimmed = ((index) => {
         return ((index) => {
            return this.state.dimmed[index];
          })(index) 
      })(i);

      squares.push(
        <Square
          backgroundColor={squareColor}
          key={i}
          dimmed={dimmed}
          clickSquare={()=> { return this.state.clickSquare(i); }}
        />
      );
    }

    if(this.state.counterDisplay !== 'none'){
      counter = <Counter counterNumber={this.state.counterNumber} />;
    }

    return (
      <div style={{height: '900px'}}>
        <Splash splashDisplay={this.state.splashDisplay} startPressed={this.state.startPressed}/>
        <Sequence seqLength={seqLength} seqDisplay={this.state.seqDisplay} />
        <Indicator display={this.state.indicatorDisplay} message={this.state.indicatorMessage}/>
        {counter}
        {squares}
        </div>
    );
  };
}

export default App;
