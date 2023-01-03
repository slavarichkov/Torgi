import './style/app.css';
import React from 'react';

import Header from './../Header/Header' // импорт Header
import Info from './../Info/Info' // импорт Info 
import Grid from './../Grid/Grid' // основная сетка участников торгов

function App() {

  return (
    <div className="app">
      <Header />
      <Info />
      <Grid />
    </div>
  );
}

export default App;
