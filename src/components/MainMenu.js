import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import "../App.css"

const MainMenu = () => {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className='Menu'>
            <div className='cloudWrapper'>
                <div className='cloudText'>How well do you know European capitals?</div>
            </div>

            <button onClick={() => setGameState("quiz")}>Check out now</button>
        </div>
    )
}

export default MainMenu