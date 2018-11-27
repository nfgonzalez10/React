// let's go!
import React from 'react';
import { getFunName } from '../helpers'

 export default class StorePicker extends React.Component {
  //  constructor(){
  //    super();
  //    this.goToStore = this.goToStore.bind(this);
  //  }
  goToStore(event){
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log('gotoStore', this.storeInput.value);
    this.context.router.transitionTo(`/store/${storeId}`);

  }
  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/* esto es un comentario en JSX */}
        <h2>Please enter A store</h2>
        <input type="text" ref={(input) => {this.storeInput = input}} required placeholder="Store Name" defaultValue={getFunName()}></input>
        <button type="submit">Visit Store --></button>
      </form>
    );
  };

}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

