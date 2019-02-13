import React from 'react';

export default class AddFishIFrom extends React.Component {
  createFish(event){
    event.preventDefault();
    const fish ={
      name: this.name.value,
      price:this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    console.log('fish', fish);
    this.props.addFish(fish);
    this.fishForm.reset();
  }


  render () {
    return (
      <form ref={(input)=> this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
      <input  ref={(input) => this.name = input} type="text" placeholder="Fish Namer"></input>
      <input  ref={(input) => this.price = input} type="text" placeholder="Fish Price"></input>
      <select ref={ (input) => this.status = input} >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea ref={(input) => this.desc =input} placeholder="Fish Desc"></textarea>
      <input ref={ (input)=> this.image = input} type="text" placeholder="Fish Image"></input>
      <button type="submit">+ Add Item</button>
       </form> 
    );

  }
}