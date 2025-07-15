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
  const [view, setView] = useState("home"); 
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
          {/* Add other pages like history, feedback */}
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

