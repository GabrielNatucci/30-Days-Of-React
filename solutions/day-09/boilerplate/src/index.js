import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {estacoes} from "./data/dados.js"

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onclick}>{this.props.text}</button>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='header-wrapper'>
                    <p>{this.props.text}</p>
                </div>
            </header>
        )
    }
} 

class Main extends React.Component {
    render() {
        let estacao = estacoes[this.props.weather];
        return (
            <main>
                <div className='main-wrapper' style={estacao.styles}>
                    <h1>Estamos no {estacao.estacao}</h1>
                    <p>De: {estacao.de}, até: {estacao.ate} </p>

                    <div className='desc'>
                         <p>{estacao.desc}</p>
                    </div>

                    <Button
                        text="Mudar estação"
                        onclick ={this.props.changeWeather}
                    />
                </div>
            </main>
        )
    }
} 

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {new Date().getFullYear()}</p>
                </div>
            </footer>
        )
    }
} 

class App extends React.Component {
    state = {
        weatherCount: 0,
    }

    changeWeather = () => {
        if (this.state.weatherCount === 3) {
            this.setState({weatherCount: 0})    
        } else {
            this.setState({weatherCount: this.state.weatherCount + 1});
        }
    }

    render() {
        return (
            <div className='app-wrapper'>
                <Header text='30 DIAS DE REACT!!'/>
                <Main 
                    changeWeather={this.changeWeather}
                    weather={this.state.weatherCount}
                />
                <Footer/>
            </div>
        )
    }
} 

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
