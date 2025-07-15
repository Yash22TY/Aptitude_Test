
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import './FrontPage.css';

const testIds = ["database"];

const DBMS = () => {
  const initialTime = 20 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    let intervalId;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      if (timeLeft === 0 && isRunning) {
        setIsRunning(false);
        setIsTimeUp(true);
        alert('Time is up! Your answers will be submitted automatically.');
        checkAnswers();
      }
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const startQuiz = async (testId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/questions/${testId}`);
      const data = await res.json();
      setQuestions(data);
      setSelectedTestId(testId);
      setHasStarted(true);
      setIsRunning(true);
      setTimeLeft(initialTime);
      setAnswers({});
      setScore(null);
      setIsTimeUp(false);
    } catch (error) {
      console.error("Error loading questions:", error);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const checkAnswers = useCallback(() => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q._id]?.toString() === q.correctAnswer?.toString()) {
        correct++;
      }
    });
    setScore(correct);
    setIsRunning(false);
    setIsTimeUp(true);
  }, [answers, questions]);

  return (
    <div>
      <main className="main-content">
        {!hasStarted ? (
          <div className="start-card-container">
            <h2>Select a Test to Start</h2>
            <div className="main-container">
              {testIds.map((id) => (
                <div key={id} className="start-card">
                  <h3>Start Test {id.toUpperCase()}</h3>
                  <h4>⏱️ Time : 20 Min</h4>
                  <button className="start-button" onClick={() => startQuiz(id)}>
                    Start Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : score !== null ? (
          <div className="results-card">
            <h2>Test Results</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <button className="restart-button" onClick={() => setHasStarted(false)}>
              Back to Tests
            </button>
          </div>
        ) : (
          <>
            <div className="timer-display">Time Left: {formatTime(timeLeft)}</div>
            {questions.map(q => (
              <div key={q._id} className="card">
                <h4>{q.questionText}</h4>
                {q.options.map(opt => (
                  <div key={opt}>
                    <input
                      type="radio"
                      name={`q${q._id}`}
                      id={`q${q._id}-${opt}`}
                      value={opt}
                      checked={answers[q._id] === opt}
                      onChange={(e) => handleAnswerChange(q._id, e.target.value)}
                    />
                    <label htmlFor={`q${q._id}-${opt}`}>{opt}</label>
                  </div>
                ))}
              </div>
            ))}
            <button onClick={checkAnswers} disabled={!isRunning || isTimeUp}>
              Submit Answers
            </button>
          </>
        )}
      </main>
    </div>
  )
}

export default DBMS
