import './style/app.css';
import { useState } from 'react';

import Header from './../Header/Header' // импорт Header
import Info from './../Info/Info' // импорт Info 
import Grid from './../Grid/Grid' // основная сетка участников торгов
import DevelopTest from './../DevelopTest/DevelopTest'


function App() {

  const [isResetClick, setIsResetClick] = useState(false); // хранит состояние клика перезапуска таймера
  const [isAddPart, setIsAddPart] = useState(false); // хранит состояние клика добавления участника
  const [isRemovePart, setIsRemovePart] = useState(false); // хранит состояние клика удаления участника

  function handleResetTimer() { // слушатель клика перезапуска таймера
    setIsResetClick(true);
    setTimeout(() => {
      setIsResetClick(false);
    }, 1);
  }

  function handleAddPart() { // слушатель клика добавления участника
    setIsAddPart(true);
    setTimeout(() => {
      setIsAddPart(false);
    }, 1);
  }

  function handleRemovePart() { // слушатель клика добавления участника
    setIsRemovePart(true);
    setTimeout(() => {
      setIsRemovePart(false);
    }, 1);
  }

  return (
    <div className="app">
      <Header />
      <Info />
      <Grid
        resetTimer={isResetClick}
        addParticipants={isAddPart}
        removeParticipants={isRemovePart}
      />
      <DevelopTest resetTimer={handleResetTimer} addPart={handleAddPart} removePart={handleRemovePart} />
    </div>
  );
}

export default App;
