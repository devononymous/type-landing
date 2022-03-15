import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import images from './speed.jpg';
import './App.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui";


const App = () => {
  return (
    <div  className="container">
     <img src={require('./images/speed.jpg')}   alt="Speed" className="img_setter" />


    </div>
    

  )
}

export default App;