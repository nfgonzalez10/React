import React from 'react';
import AddFishForm from './AddFishFomr'

export default class Inventory extends React.Component {

  render () {
    return (
      <div>
      <h2>Inventory</h2>
      <AddFishForm addFish={this.props.addFish} />
      <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}