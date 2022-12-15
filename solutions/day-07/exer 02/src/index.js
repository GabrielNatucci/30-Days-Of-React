import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fotoMinha from './images/IMG_20210215_180347_878.jpg'

const rootElement = document.getElementById('root');

const fotoMinhaImg = <img src = {fotoMinha} alt = 'foto minha'/>

const Button = ({text, onclick }) => (
    <button onClick = {onclick}>{text}</button>
)

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

class UserCard extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        backgroundColor: 'white',
        color: 'black'
    }

    greetPeople = () => {alert("30 DAYS OF REACT!!")}
    showTime = () => {alert(new Date().toISOString())}

    changeBackground = () => {
        let color;
        let backgroundColor;
        
        if (this.state.backgroundColor === 'white') {
            backgroundColor = '#0f172a';
            color = 'white';
        } else {
            backgroundColor = 'white';
            color = 'black';
        }
        this.setState({backgroundColor});
        this.setState({color});
        this.props.teste = "cu";
    }

    render() {
        console.log(this.props.teste);

        return (
            <div className='UserCard' style={this.state}>
                <div className = "UserCard-wrapper">
                    <div className = "eu">
                        {fotoMinhaImg}
                        <h3>GABRIEL NATUCCI &#10003;</h3>  
                    </div>

                    <p className = 'programmer'>Programmer </p>

                    <div className = "skills">
                        <Button style={this.state} text = "Greet People" onclick = {this.greetPeople}/>
                        <Button text = "Show Time" onclick = {this.showTime}/> 
                        <Button text = "Change Background" onclick = {this.changeBackground}/>
                    </div>
                </div>
            </div>
        ) 
    }
} 

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        teste: "clkajalsdkjflj",
    }

    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <UserCard teste={this.state}/>
                </div>
            </main>
        )
    }
} 

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
