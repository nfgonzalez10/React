import React from 'react';
import AddFishForm from './AddFishFomr'

export default class Inventory extends React.Component {
  render () {
    return (
      <div>
      <h2>Inventory</h2>
      <AddFishForm />
      </div>
    )
  }
}