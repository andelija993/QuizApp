import React, { useState, useContext, useEffect } from 'react'
import { Questions } from '../helpers/QusetionBank'
import { QuizContext } from '../helpers/Contexts'



const Quiz = () => {
    const { score, setScore, setGameState, usedQuestions, setUsedQuestions } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chosenOption, setChosenOption] = useState('');
    const [feedbackClass, setFeedbackClass] = useState('');

    const [rightAnswer, setRightAnswer] = useState(false);

    useEffect(() => {
        shuffleQuestions();
    }, []);

    const shuffleQuestions = () => {
        const shuffledQuestions = Questions.sort(() => Math.random() - 0.5);
        setUsedQuestions([]);
        setCurrentQuestion(0);
        setFeedbackClass('');
    };
    const nextQuestion = () => {
        setUsedQuestions([...usedQuestions, currentQuestion]);
        if (usedQuestions.length >= 9) {
            setGameState("endScreen");
        } else {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * Questions.length);
            } while (usedQuestions.includes(nextIndex));
            setCurrentQuestion(nextIndex);
        }
    };

    const handleOptionClick = (selectedOption) => {
        setChosenOption(selectedOption);

        if (selectedOption === Questions[currentQuestion].answer) {
            setRightAnswer(true);
            setScore(score + 1);
        } else {
            setRightAnswer(false);
        }


        setFeedbackClass(rightAnswer ? 'correct' : 'incorrect');

        setTimeout(() => {
            setFeedbackClass('');
            setChosenOption('');
            nextQuestion();
        }, 1000);
    };
    console.log(usedQuestions);
    return (
        <div className='Quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className='optionsWrapper'>
                {['A', 'B', 'C', 'D'].map((option) => (
                    <button
                        key={option}
                        className={`${chosenOption === option
                            ? rightAnswer
                                ? 'correct'
                                : 'incorrect'
                            : ''
                            }`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {Questions[currentQuestion][option]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;