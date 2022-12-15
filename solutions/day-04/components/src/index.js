import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fotoMinha from './images/IMG_20210215_180347_878.jpg'

const rootElement = document.getElementById('root');

const fotoMinhaImg = <img src = {fotoMinha} alt = 'foto minha'/>
const skills = ['HTML', 'CSS', 'Javascript', 'C', 'Python', 'Java', 'Git', 'Embedded Systems'];
const skillsFormatado = skills.map((skill) => <span key={skill}>{skill}</span>);

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Gabriel Natucci</p>
      <small>Nov 24, 2022</small>
    </div>
  </header>
)

const UserCard = () => (
  <div className='UserCard'>
    <div className = "UserCard-wrapper">
      <div className = "eu">
        {fotoMinhaImg}
        <h3>GABRIEL NATUCCI &#10003;</h3>  
      </div>

      <p class = 'programmer'>Programmer </p>
      <h3>Skills </h3>

      <div className = "skills">
        {skillsFormatado}
      </div>

      <p className='juntou-se'>&#9201; Joined on Aug, 2022</p>
    </div>
  </div>
)

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <UserCard/>
    </div>
  </main>
)

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2022</p> 
    </div>
  </footer>
)

const App = () => (
  <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

ReactDOM.render(<App/>, rootElement);