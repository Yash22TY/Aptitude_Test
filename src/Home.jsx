<<<<<<< HEAD
import './home.css';
import { Link, Routes } from 'react-router-dom';
import { FaBrain, FaJava, FaPython, FaDatabase, FaCalculator, FaRandom } from 'react-icons/fa';
import Numerical from './Numerical';

function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Welcome to the <span className="highlight">Aptitude Test</span></h1>
                <p className="subtitle">
                    Practice and enhance your technical and reasoning skills with our structured MCQ-based quizzes.
                </p>
            </div>

            <div className="home-card">
                <h2>🚀 Topics Covered</h2>
                <ul className="topics-list">
                    <li><FaBrain className="icon" /> C Programming</li>
                    <li><FaJava className="icon" /> Java</li>
                    <li><FaPython className="icon" /> Python</li>
                    <li><FaDatabase className="icon" /> DBMS</li>
                    <li><FaCalculator className="icon" /> Numerical Reasoning</li>
                    <li><FaRandom className="icon" /> Random Test</li>
                </ul>

                <p className="info">
                    Each test is <strong>time-bound</strong> and provides multiple-choice questions to help you prepare for placements or competitive exams. Click a topic on the left menu to start, or try a test below!
                </p>

                <Link to="/numerical_Reasoning">
                    <button className="home-start-btn" >🎯 Start Numerical Reasoning </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;


// import './home.css';

// function Home() {
//   return (
//     <div className="home-wrapper">
//       <section className="hero">
//         <h1>🚀 Welcome to Aptitude Test App</h1>
//         <p>
//           Practice C, Java, Python, DBMS & Numerical Reasoning. Master concepts with instant scoring & explanations.
//         </p>
//         <a href="#numerical_Reasoning" className="start-btn">Start Now</a>
//       </section>

//       <section className="features">
//         <h2 className="section-title">✨ Why Use This Platform?</h2>
//         <div className="feature-grid">
//           <div className="feature-card">
//             <h3>🧠 Topic-Wise Tests</h3>
//             <p>Choose from specific topics and difficulty levels to sharpen your skills.</p>
//           </div>
//           <div className="feature-card">
//             <h3>⏱️ Timed Quizzes</h3>
//             <p>Real-time countdown timer to simulate actual test conditions.</p>
//           </div>
//           <div className="feature-card">
//             <h3>✅ Instant Scoring</h3>
//             <p>Submit your answers and get immediate results with explanations.</p>
//           </div>
//           <div className="feature-card">
//             <h3>📈 Performance Tracking</h3>
//             <p>View your total score and understand which areas need improvement.</p>
//           </div>
//         </div>
//       </section>

//       <footer className="home-footer">
//         <p>📞 Contact us at: support@aptitudetest.com | 📍 Made with ❤️ by Students</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React from 'react'
// import './home.css'

// const Home = () => {

//     return (
//         <div className="home-container">
//       <h1 className="home-title">Welcome to the Aptitude Test Application</h1>
//       <p className="home-description">
//         This platform offers a variety of tests to help you prepare for competitive exams, job interviews,
//         and logical reasoning assessments. You can practice Numerical Reasoning, Verbal, Programming, and
//         more with real-time timers and instant feedback.
//       </p>

//       <div className="features-section">
//         <h2>📌 Key Features:</h2>
//         <ul className="feature-list">
//           <li>🧠 Practice with different categories like C, Java, Python, DBMS, and Numerical Reasoning</li>
//           <li>⏱️ Timer-based mock tests to simulate real exam conditions</li>
//           <li>✅ Instant result with score after submission</li>
//           <li>📚 Explanation for every correct answer</li>
//           <li>🎯 Difficulty levels: Easy, Medium, Hard</li>
//         </ul>
//       </div>

//       <div className="start-section">
//         <h3>Ready to challenge yourself?</h3>
//         <p>Select a category from the left sidebar and start testing your skills!</p>
//       </div>
//     </div>
//     )
// }

// export default Home
=======
import './home.css';
import { Link, Routes } from 'react-router-dom';
import { FaBrain, FaJava, FaPython, FaDatabase, FaCalculator, FaRandom } from 'react-icons/fa';
import Numerical from './Numerical';

function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Welcome to the <span className="highlight">Aptitude Test</span></h1>
                <p className="subtitle">
                    Practice and enhance your technical and reasoning skills with our structured MCQ-based quizzes.
                </p>
            </div>

            <div className="home-card">
                <h2>🚀 Topics Covered</h2>
                <ul className="topics-list">
                    <li><FaBrain className="icon" /> C Programming</li>
                    <li><FaJava className="icon" /> Java</li>
                    <li><FaPython className="icon" /> Python</li>
                    <li><FaDatabase className="icon" /> DBMS</li>
                    <li><FaCalculator className="icon" /> Numerical Reasoning</li>
                    <li><FaRandom className="icon" /> Random Test</li>
                </ul>

                <p className="info">
                    Each test is <strong>time-bound</strong> and provides multiple-choice questions to help you prepare for placements or competitive exams. Click a topic on the left menu to start, or try a test below!
                </p>

                <Link to="/numerical_Reasoning">
                    <button className="home-start-btn" >🎯 Start Numerical Reasoning </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;


// import './home.css';

// function Home() {
//   return (
//     <div className="home-wrapper">
//       <section className="hero">
//         <h1>🚀 Welcome to Aptitude Test App</h1>
//         <p>
//           Practice C, Java, Python, DBMS & Numerical Reasoning. Master concepts with instant scoring & explanations.
//         </p>
//         <a href="#numerical_Reasoning" className="start-btn">Start Now</a>
//       </section>

//       <section className="features">
//         <h2 className="section-title">✨ Why Use This Platform?</h2>
//         <div className="feature-grid">
//           <div className="feature-card">
//             <h3>🧠 Topic-Wise Tests</h3>
//             <p>Choose from specific topics and difficulty levels to sharpen your skills.</p>
//           </div>
//           <div className="feature-card">
//             <h3>⏱️ Timed Quizzes</h3>
//             <p>Real-time countdown timer to simulate actual test conditions.</p>
//           </div>
//           <div className="feature-card">
//             <h3>✅ Instant Scoring</h3>
//             <p>Submit your answers and get immediate results with explanations.</p>
//           </div>
//           <div className="feature-card">
//             <h3>📈 Performance Tracking</h3>
//             <p>View your total score and understand which areas need improvement.</p>
//           </div>
//         </div>
//       </section>

//       <footer className="home-footer">
//         <p>📞 Contact us at: support@aptitudetest.com | 📍 Made with ❤️ by Students</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React from 'react'
// import './home.css'

// const Home = () => {

//     return (
//         <div className="home-container">
//       <h1 className="home-title">Welcome to the Aptitude Test Application</h1>
//       <p className="home-description">
//         This platform offers a variety of tests to help you prepare for competitive exams, job interviews,
//         and logical reasoning assessments. You can practice Numerical Reasoning, Verbal, Programming, and
//         more with real-time timers and instant feedback.
//       </p>

//       <div className="features-section">
//         <h2>📌 Key Features:</h2>
//         <ul className="feature-list">
//           <li>🧠 Practice with different categories like C, Java, Python, DBMS, and Numerical Reasoning</li>
//           <li>⏱️ Timer-based mock tests to simulate real exam conditions</li>
//           <li>✅ Instant result with score after submission</li>
//           <li>📚 Explanation for every correct answer</li>
//           <li>🎯 Difficulty levels: Easy, Medium, Hard</li>
//         </ul>
//       </div>

//       <div className="start-section">
//         <h3>Ready to challenge yourself?</h3>
//         <p>Select a category from the left sidebar and start testing your skills!</p>
//       </div>
//     </div>
//     )
// }

// export default Home
>>>>>>> 42f78361ced614b42bedf5bae1314bb6c7577a25
