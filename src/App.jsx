import { useState, useEffect, useCallback } from 'react';
import './FrontPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Numerical from './Numerical';
import Python from './Python';
import C from './C';
import JavaA from './JavaA';
import DBMS from './DBMS';
import RandomQ from './RandomQ';
import Footer from './footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { FaUserCircle } from 'react-icons/fa';
import Profile from './Profile';


function App() {
  const [view, setView] = useState("home"); // options: "home", "signin", "signup"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="frontpage-container">
        <Router>
          <header className="top-header">
            <div className="website-name">Aptitude Test</div>
            <div className="auth-buttons">
              {!isAuthenticated ? (
                <>
                  <button className="sign-in-button" setIsAuthenticated={setIsAuthenticated} onClick={() => setView("signin")}>Sign In</button>
                  <button className="sign-out-button" setIsAuthenticated={setIsAuthenticated} onClick={() => setView("signup")}>Sign Up</button>
                  {/* <li><Link to="/signin">Sign In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li> */}
                </>
              ) : (
                <li className="profile-dropdown">
                  <FaUserCircle size={28} className="profile-icon" />
                  <ul className="dropdown-content">
                    <li><Link to="/profile">Edit Profile</Link></li>
                    <li><Link to="/history">Test History</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li onClick={handleLogout} className="logout-btn">Logout</li>
                  </ul>
                </li>
              )}
            </div>
            <Routes>
          <Route path="/profile" element={<Profile />} />
          {/* Add other pages like /history, /feedback */}
        </Routes>
          </header>
          <div className="app-container">
            <aside className="left-navigation">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/random">Random Test</Link></li>
                  <li><Link to="/c">C</Link></li>
                  <li><Link to="/java">Java</Link></li>
                  <li><Link to="/python">Python</Link></li>
                  <li><Link to="/dbms">DBMS</Link></li>
                  <li><Link to="/numerical-reasoning">Numerical Reasoning</Link></li>
                </ul>
              </nav>
            </aside>

            <main className="main-content">
              {view === "signin" ? (
                <SignIn onSwitch={setView} />
              ) : view === "signup" ? (
                <SignUp onSwitch={setView} />
              ) : (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/random" element={<RandomQ />} />
                  <Route path="/c" element={<C />} />
                  <Route path="/java" element={<JavaA />} />
                  <Route path="/python" element={<Python />} />
                  <Route path="/dbms" element={<DBMS />} />
                  <Route path="/numerical-reasoning" element={<Numerical />} />
                </Routes>
              )}

            </main>
          </div>
        </Router>
      </div >
      <Footer />
    </>
  );
}

export default App;



// import { useState, useEffect, useCallback } from 'react';
// import './FrontPage.css';
// // import aptitudeQuestions from './Question';
// const [questions, setQuestions] = useState([]);

// function App() {
//   const initialTime = 20 * 60; // 30 minutes in seconds
//   const [timeLeft, setTimeLeft] = useState(initialTime);
//   const [isRunning, setIsRunning] = useState(false);
//   const [hasStarted, setHasStarted] = useState(false);
//   const questions = aptitudeQuestions;
//   const [answers, setAnswers] = useState({});
//   const [isTimeUp, setIsTimeUp] = useState(false);
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     let intervalId;

//     if (isRunning && timeLeft > 0) {
//       intervalId = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalId);
//       if (timeLeft === 0 && isRunning) {
//         setIsRunning(false);
//         setIsTimeUp(true);
//         alert('Time is up! Your answers will be submitted automatically.');
//         checkAnswers();
//       }
//     }

//     return () => clearInterval(intervalId);
//   }, [isRunning, timeLeft]);

//   const startQuiz = () => {
//     setHasStarted(true);
//     setIsRunning(true);
//   };

//   const handleAnswerChange = (questionId, value) => {
//     setAnswers(prevAnswers => ({
//       ...prevAnswers,
//       [questionId]: value,
//     }));
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');
//     return `${formattedMinutes}:${formattedSeconds}`;
//   };

//   const checkAnswers = useCallback(() => {
//     let correctCount = 0;
//     questions.forEach(question => {
//       if (answers[question.id]?.toString() === question.correctAnswer?.toString()) {
//         correctCount++;
//       }
//     });
//     setScore(correctCount);
//     setIsRunning(false);
//     setIsTimeUp(true);
//   }, [answers, questions]);

//   return (
//     <div className="frontpage-container">
//       <header className="top-header">
//         <div className="website-name">Mock Test</div>
//         <div className="auth-buttons">
//           <button className="sign-in-button">Sign In</button>
//           <button className="sign-out-button">Sign Out</button>
//         </div>
//       </header>

//       <aside className="left-navigation">
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="main-content">
//         {!hasStarted ? (
//           <div className="start-card">
//             <h2>Ready to start?</h2>
//             <button className="start-button" onClick={startQuiz}>
//               Start Quiz
//             </button>
//           </div>
//         ): score !== null ? (
//           <div className="results-card">
//             <h2>Quiz Results</h2>
//             <p>Your score: {score} out of {questions.length}</p>
//             <button className="restart-button" onClick={startQuiz}>
//               Restart Quiz
//             </button>
//           </div>
//         ): (
//           <>
//           <div className="timer-display">Time Left: {formatTime(timeLeft)}</div>
//             {questions.map(question => (
//               <div key={question.id} className="card">
//                 <h4>{`Q${question.id}. ${question.question}`}</h4>
//                 {question.options.map(option => (
//                   <div key={option.value}>
//                     <input
//                       type="radio"
//                       name={`q${question.id}`}
//                       id={`q${question.id}-${option.value}`}
//                       value={option.value}
//                       checked={answers[question.id] === option.value}
//                       onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//                     />
//                     <label htmlFor={`q${question.id}-${option.value}`}>{option.label}</label>
//                     <br />
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <button id='eventclick' onClick={checkAnswers}  disabled={!isRunning || isTimeUp}>
//               Submit Answers
//             </button>
//           </>
//         )}
//       </main>

//       <footer className="page-footer">
//         <div className="social-logos">
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
//           <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
//           <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram</a>
//         </div>
//         <div className="phone-number">
//           Phone: +91 XXXXXXXXXX
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;