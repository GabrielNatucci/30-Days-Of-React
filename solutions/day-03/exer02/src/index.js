import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.getElementById('root');

const main = (
  <main>
    <div class = "main-wrapper">
      <h1>SUBSCRIBE</h1>
      <p>Sing up with your e-mail address to receive news and updates</p>
      <div class = "inputs">
        <input type="text" placeholder='First name'></input>
        <input type="text" placeholder='Last name'></input>
        <input type="text" placeholder='Email'></input>
      </div>
      <button>Subscribe</button>
    </div>
  </main>
)

ReactDOM.render(main, rootElement);
