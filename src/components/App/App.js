import './style/app.css';
import React from 'react';

import Header from './../Header/Header' // импорт Header
import Info from './../Info/Info' // импорт Info 

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
    </div>
  );
}

export default App;
