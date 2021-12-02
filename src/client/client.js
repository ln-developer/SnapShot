import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { App } from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';

window.addEventListener('load', () => {
  ReactDOM.hydrate(<App />, document.getElementById('react_root'))
})
