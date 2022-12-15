import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const InputText = (props) => {
  if (props.placeholder === 'Email'){
    return (
      <input type='email' className='input-text' placeholder={props.placeholder}/>
    )
  } else {
    return (
      <input type='text' className='input-text' placeholder={props.placeholder}/>
    )
  }
};

const Button = (props) => (
   <button className="Botao">{props.value}</button>
);

const App = () => {
  return (
    <div className="app">
      <div className="app-wrapper">
        <h1>SUBSCRIBE</h1>
        <p>Sing up with your email adress to receive news and updates</p>
        <div className='inputs'>
          <InputText placeholder='First name' />
          <InputText placeholder='Last name' />
          <InputText placeholder='Email' />
        </div>
        <Button value='Subscribe'/>
      </div>
    </div>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
