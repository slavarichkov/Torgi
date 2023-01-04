import './style/app.css';
import React from 'react';

import Header from './../Header/Header' // импорт Header
import Info from './../Info/Info' // импорт Info 
import Grid from './../Grid/Grid' // основная сетка участников торгов
import DevelopTest from './../DevelopTest/DevelopTest'


function App() {

  return (
    <div className="app">
      <Header />
      <Info />
      <Grid />
      <DevelopTest />
    </div>
  );
}

export default App;
