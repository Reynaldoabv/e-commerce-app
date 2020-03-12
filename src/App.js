import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/home/HomePage';
import ShopPage from './Pages/shop/ShopPage.jsx';

const App = () => {
  return (
    <div className="App p-3">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
