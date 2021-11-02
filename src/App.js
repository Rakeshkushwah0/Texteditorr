import Forms from "./components/Forms";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import { Route } from "react-router";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route  
// } from "react-router-dom";



function App() {
const [mode, setmode] = useState('light')
const [alert, setalert] = useState(null)

const showalert = (message,type)=>{
 setalert({
   msg:message,
   type:type
 })
 setTimeout(() => {
   setalert(null);
 }, 2000);
 
}



const togglebtn =()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='grey'
    showalert("Dark made has been enabled","success")
  }else{
    setmode('light')
    document.body.style.backgroundColor='white'
    showalert("Dark made has been disabled","success")
  }
}
  return (
    
    <>
  {/* <Router> */}
  <Navbar title="Text editor" abouttext="about Texteditor" showalert={showalert} mode={mode} toggle={togglebtn}/>
  <Alert alert={alert} />
  <div className="container">
 {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
          <Forms heading="Enter your text below" mode={mode} showalert={showalert}/>
          {/* </Route> */}
        {/* </Switch> */}
</div>
  {/* </Router> */}
 
   </>
  
  );
}

export default App;
