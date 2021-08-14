import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


let obj = {
  name : "Shobhit",
  organisation : "DevsNest"
}

const {name,organisation} = obj;
console.log(name);
console.log(organisation);

ReactDOM.render(<App />, document.getElementById('root'));
