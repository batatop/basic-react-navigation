import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main';

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}
