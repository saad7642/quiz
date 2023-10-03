import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    title: 'What is HTML',
    options: ['Hyper Text Markup Language', 'Hyper Text Mkup Language', 'Hyper Text Markup Language', 'Hyper Text Markup Language'],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    title: 'What is CSS',
    options: ['Cast Seen Seen', 'Cut So So', 'Cascading Stylesheet', 'Mujhe sahi pata'],
    correctAnswer: 'Cascading Stylesheet',
  },
  {
    title: 'What is JS',
    options: ['Jao sabi se', 'Java', 'Javascript', 'Jiye Sarkar'],
    correctAnswer: 'Javascript',
  },
  {
    title: 'What is React',
    options: ['Ja saht se', 'Java', 'Javascript', 'Jiye Sarkar'],
    correctAnswer: 'Javascript',
  },
];

function App() {
  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinish, setQuizFinish] = useState(false);

  function nextQuestion() {
    setQuestion((prevQuestion) => prevQuestion + 1);
  }

  function updateScore() {
    if (currentAnswer === questions[question].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function checkAnswer() {
    updateScore();
    if (question < questions.length - 1) {
      nextQuestion();
      setCurrentAnswer(''); // Clear the current answer for the next question
    } else {
      finish();
    }
  }

  function finish() {
    setQuizFinish(true);
  }

  function restart() {
    setQuizFinish(false);
    setQuestion(0);
    setScore(0);
  }

  const options = questions[question].options;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz</h1>
        {quizFinish ? (
          <div>
            <p>Quiz Finished! Your Score: {score}</p>
            <button onClick={restart}>Restart</button>
          </div>
        ) : (
          <div>
            <h2>{questions[question].title}</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <input type="radio" value={option} onChange={(e) => setCurrentAnswer(e.target.value)} />
                  {option}
                </li>
              ))}
            </ul>
            <button onClick={checkAnswer}>Check Answer</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
