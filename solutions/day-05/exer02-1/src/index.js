import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HTML from './image/html.png';
import CSS from './image/CSS3.png';
import JS from './image/JS.png';
import REAGE from './image/react.png';

const Img = (props) => (
  <div className='img-div'>
    <img src = {props.src} width='50%' alt={props.alt}/> 
  </div>
);

const App = () => {
  return (
    <div className='app'>
      <h2> Tecnologias Front-end </h2>
      <div className="app-wrapper"> 
        <Img src={HTML} alt='html'/> 
        <Img src={CSS} alt='css'/>
        <Img src={JS} alt='js'/>
        <Img src={REAGE} alt='react'/>
      </div>
    </div>
  )
};

const root = document.getElementById('root'); 

ReactDOM.render(<App/>, root);
