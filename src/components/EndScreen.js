import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import "../App.css"
import { Questions } from '../helpers/QusetionBank';


const EndScreen = () => {
    const { score, setScore, setGameState, usedQuestions } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu")
    }

    console.log(usedQuestions, "AAAAAAAA");
    const findName = (question) => {
        const { A, B, C, D, answer } = question;

        if (answer === 'A') {
            return A;
        } else if (answer === 'B') {
            return B;
        } else if (answer === 'C') {
            return C;
        } else if (answer === 'D') {
            return D;
        }

        return 'Correct answer not found';
    }


    return (
        <div className="EndScreen">
            <h1>Quiz finished</h1>
            <h3>{score} / 10</h3>
            <h4>Correct answers:</h4>
            <ul>
                {usedQuestions.map((questionIndex, index) => (
                    <div className='quizAnswers'>
                        <li key={index}>
                            <>
                                {Questions[questionIndex].prompt}
                                <span> {findName(Questions[questionIndex])}</span>
                            </>
                        </li>
                    </div>
                ))
                }
            </ul>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default EndScreen;