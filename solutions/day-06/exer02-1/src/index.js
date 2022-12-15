import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//const numbers = [1, 2];

const Number = ({number}) => {
    return (
        <div className='number-div'>
            <span className='number-p' >{number}</span>
        </div>
    )
}

const Numbers = ({numbers}) => {
    let NumbersList = [];

    const total = parseInt(numbers.length/8);
    for (let j = 0; j < total ; j++){
        NumbersList.push(numbers.splice(0, 8));
    }

    console.log(NumbersList);

    const listNumbers = numbers.map((number) => (
        <Number key={number} number={number}/>
    ))
    return (<div className='listNumbers'>{listNumbers}</div>);
}

const App = () => {
    return (
        <div className='app-wrapper'>
            <Numbers numbers={numbers}/>
        </div>
    )
} 

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
