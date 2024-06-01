import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
   setAlert({
    msg : message,
    type : type
   })
   setTimeout(() => {
    setAlert(null)
   }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === "dark") {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title = "TextUtils - Home";
    }
    else{
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","Success");
      document.title = "TextUtils - Dark Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar showMode={mode} toggleMode={toggleMode} textColor = {textColor}/>
    <Alert alert= {alert}/>
      <Routes>
        <Route exact path="/" element={ <TextForm showAlert={showAlert} showMode={mode}/> } />
        <Route exact path="about" element={ <About showMode={mode}/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
