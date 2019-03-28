import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/app';
import PhotoReturn from './components/photo-return';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/photos">My Photos</Link>
          </div>
          <Route exact path="/" component={App} />
          <Route path="/photos" component={PhotoReturn} />
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
