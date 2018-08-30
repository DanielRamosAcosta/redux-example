import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from "./store";
import { Provider } from "react-redux";

const cosas = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(cosas, document.getElementById('root'));
registerServiceWorker();
