import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import DummyIndex from './components/dummy_index';
import DummyLorem from './components/dummy_lorem';

// Apply imported middleware, such as Redux Promise
const createStoreWithMiddleware = applyMiddleware()(createStore);

// With Switch put the most specific route on top. It stops checking on the first match
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>          
          <Route path="/lorem" component={DummyLorem} />       
          <Route path="/" component={DummyIndex} />          
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
