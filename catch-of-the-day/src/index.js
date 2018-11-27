// let's go!
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import StorePicker from './components/StorePicker'
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />
      <Miss component={NotFound}></Miss>
      </div>
    </BrowserRouter>
  )
}

ReactDom.render(<Root/>, document.getElementById('main'));