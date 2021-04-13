import React from 'react'
import trad from './text'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
          tradu: trad[0],
          rand: 0,
    };

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000,
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        let rando = this.getRandomInt(11);
        while(this.state.rand === rando){
            rando = this.getRandomInt(11);
        }
        this.setState({
          date: new Date(),
          tradu: trad[rando],
          rand: rando,
        })
    }
  
    render() {
      return ( 
        <div> 
            <div> {this.state.date.toLocaleDateString()} </div>
            <div> {this.state.tradu} {this.state.date.toLocaleTimeString()} </div>
        </div>
      )
    }
  };

  export default Clock;