import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#2B547E';
      showAlert("Dark Mode has been enabled","success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("light Mode has been enabled","success");

    }    
  }

  


  return (
   <>
 <Router>
<Navbar title="TextUtils"  about="About TextUtils" mode={mode}   toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
            <Route path="/about"> 
            <About />
            </Route>
            <Route path="/">
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
  </div>
</Router> 
 </>
  );
}

export default App;
