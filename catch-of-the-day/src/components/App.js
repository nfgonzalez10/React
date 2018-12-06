import React from 'react';
import Header from './Header'
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

export default class App extends React.Component {

  constructor (){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish (fish) {
    const fishes = {...this.state.fishes}
    console.log('fishes', fishes);
    const timesStamp =  Date.now();
    fishes[`fish-${timesStamp}`] = fish;
    this.setState({fishes});
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }
  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order />
        <Inventory loadSamples={this.loadSamples} addFish={this.addFish}/>
      </div>
    );
  }
} 
