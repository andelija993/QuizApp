
import './App.css';
import { useState, useContext } from 'react';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';

import { QuizContext } from './helpers/Contexts';

const App = () => {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [usedQuestions, setUsedQuestions] = useState([]);
  return (
    <div className="App">
      <div className='mainWrapper'>
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore, usedQuestions, setUsedQuestions }}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
