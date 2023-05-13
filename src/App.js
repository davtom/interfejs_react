import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  const [showDiv, setShowDiv] = useState(false);

  const handleDotClick = () => {
    if (showDiv) {
      setShowDiv(false);
    } else {
      setShowDiv(true);
    }
  }

  const [fontSize, setFontSize] = useState(24);

  const handleIncreaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const handleDecreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'haslo') {
      setIsLoggedIn(true);
    } else {
      alert('Niepoprawny login lub hasło');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="username">Login:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Hasło:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Zaloguj</button>
        </form>
      </div>
    );
  }

  return (
      <div style={{ fontSize: `${fontSize}px` }} className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Container>
            <Row>
              <Col md={12}>
                <a>Menu górne</a>
              </Col>
            </Row>
            <Row style={{border: "none", boxShadow: "none", backgroundColor: "#ffffff00"}}>
              <Col md={4} className="App-middle" style={{border: "1px solid black", borderRadius: "5px", boxShadow: "2px 2px 5px black"}}>
                <HelloWorld name="Dawid"/>
              </Col>
              <Col md={3} className="App-middle" style={{border: "1px solid black", borderRadius: "5px", boxShadow: "2px 2px 5px black"}}>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path='About' element={<About />} />
                      <Route path='Users' element={<Users />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </Col>
              <Col md={4} className="App-midle" style={{border: "1px solid black", borderRadius: "5px", boxShadow: "2px 2px 5px black"}}>
                <Counter/>
                <button onClick={handleIncreaseFontSize} style={{backgroundColor: "green", color: "white"}}>Zwiększ czcionkę</button>
                <button onClick={handleDecreaseFontSize} style={{backgroundColor: "red", color: "white"}}>Zmniejsz czcionkę</button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Zmiana motywu ciemny / jasny</p>
                <button onClick={handleThemeToggle}>Zmień motyw</button>
              </Col>
            </Row>
          <button className="dot" onClick={handleDotClick}></button>
        </Container>
        {showDiv &&
          <div className="chat">
            <h1>Chat</h1>
            <hr></hr>
            <a>Siemka! Witaj w moim chacie :3</a>
          </div>
        }
    </div>

  );
}

export default App;