import React, { useState } from "react";
import './App.css';
import Alert from "./Components/Alert";
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
  setAlert({
  msg: message,
  type: type
})
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#001a4d";
      document.body.style.color = "white";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#001a4d";
    }
  };

  return (
    <div className="App">
      <>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <TextForm showAlert={showAlert} heading="TextUtils: Word Counter | Character Counter | Remove Extra Space " />
        </div>

      </>
    </div>
  );
};

export default App;
