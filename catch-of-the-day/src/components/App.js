import React from 'react';
import Header from './Header'
import Order from './Order';
import Inventory from './Inventory';

export default class App extends React.Component {
  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
        </div>
        <Order />
        <Inventory/>
      </div>
    );
  }
} 
