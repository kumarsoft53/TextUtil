import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('dark');
  const[switchText, setSwitchText] = useState('dark');
  const[darkSwitchName, setDarkSwitchName]=useState('Enable Darkmode');
  const[alert, setAlert]=useState(null);

  const showAlert = (message, type) =>{
    setAlert({msg:message,
    typ:type})
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const darkEnable = () =>{
    if (mode === 'dark') {
      setMode('light');
      setSwitchText('dark');
      setDarkSwitchName('Enable Darkmode')
      showAlert("Light Mode has beeb enable", "Success");
    } else {
      setMode('dark');
      setSwitchText('light');
      setDarkSwitchName('Disable Darkmode')
      showAlert("Dark Mode has beeb enable", "Success");
    }

  }

  return (
    <>
    {/* <Router> */}
    {/* in below line darkSwitch={switchText} is there but not in used */}
     <Navbar title="TextUtil" aboutUs='About' mode={mode} darkSwitch={switchText} toggleMode={darkEnable} switchName={darkSwitchName}/>
     <Alert alertNote={alert}/>
     <div className='container my-3'>
     {/* <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Text heading='Enter text to analyze'/>} />
    </Routes> */}
      <Text heading='Enter text to analyze'/>
     </div> 
     {/* </Router> */}
    </>
  );
}
export default App;
