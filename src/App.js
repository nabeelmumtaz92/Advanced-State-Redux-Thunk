// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NameInput from './components/NameInput';
import NationalityResult from './components/NationalityResult';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Nationality Predictor</h1>
        <NameInput />
        <NationalityResult />
      </div>
    </Provider>
  );
}

export default App;
