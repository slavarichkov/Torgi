import './style/app.css';
import { useState } from 'react';

import Header from './../Header/Header' // импорт Header
import Info from './../Info/Info' // импорт Info 
import Grid from './../Grid/Grid' // основная сетка участников торгов
import DevelopTest from './../DevelopTest/DevelopTest'


function App() {

  const [isResetClick, setIsResetClick] = useState(false);

  function handleResetTimer() {
    setIsResetClick(true);
    setTimeout(() => {
      setIsResetClick(false);
    }, 1);
  }

  return (
    <div className="app">
      <Header />
      <Info />
      <Grid resetTimer = {isResetClick}/>
      <DevelopTest resetTimer={handleResetTimer} />
    </div>
  );
}

export default App;
