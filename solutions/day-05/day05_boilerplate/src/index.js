import React from 'react'
import ReactDOM from 'react-dom'
//import asabenehImage from './images/asabeneh.jpg'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: {firstName, lastName},
    date,
  }, }) => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {firstName} {lastName}
      </p>
      <small>{showDate(date)}</small>
    </div> 
  </header>  
)

const Button = (props) => (
  <button onClick={props.onClick}> {props.text} </button>
) 

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author : {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    }, 
    date: new Date(),
  }

  const sayHi = () => {
    alert('Hi')
  } 

  return (
    <div className='app'>
      <Header data={data}/>
      <Button text='Say Hi' onClick={sayHi}/>
    </div>
  )
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);