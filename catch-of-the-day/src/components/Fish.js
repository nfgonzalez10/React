import React from 'react';

export default class Fish extends React.Component {
  render() {
    const {details} =  this.props.details;
    return (
    <li className="menu-fish">
    <img src={details.image} 
    alt={details.name}></img>
    </li>)
  }
}

