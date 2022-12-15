import React from 'react';
import ReactDOM from 'react-dom';
import fotoMinha from './images/IMG_20210215_180347_878.jpg' 

const root = document.getElementById('root'); 
const fotoMinhaImg = <img src = {fotoMinha} alt = 'foto minha'/>

const skills = ['HTML', 'CSS', 'Javascript', 'C', 'Python', 'Java', 'Git', 'Embedded Systems'];
const skillsFormatado = skills.map((skill) => <span key={skill}>{skill}</span>);

const main = (
  <main>
    <div className = "main-wrapper">
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
  </main>
)

ReactDOM.render(main, root)
