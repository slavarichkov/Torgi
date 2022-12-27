import './style/app.css';
import React from 'react';

import DateAndTime from '../../utils/DateAndTime/DateAndTime' // импорт даты и времени

function App() {

  return (
    <div className="app">
      <header className="header">
        <h2 className='header_title'>Ход торгов</h2>
        <p className='header_text'>Тестовые торги на аппарат ЛОТОС №2033564 ({DateAndTime()}) </p>
      </header>
    </div>
  );
}

export default App;
