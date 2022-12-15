import React from 'react';
import ReactDOM from 'react-dom';
import {countriesData} from './data/countries';
import './index.css';

const rootElement = document.getElementById('root');

const Button = ({text, onclick}) => (
    <button onClick = {onclick}>{text}</button>
)

const Header = ({styles}) => (
    <header style={styles}>
        <div className="header-wrapper">
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Gabriel Natucci</p>
            <small>Nov 24, 2022</small>
        </div>
    </header>
)

const Languages = ({language}) => {
    let languagesList = [];

    for (let i = 0; i <language.length; i++){
        if(i === language.length - 1) {
            languagesList += language[i];
        } else {
            languagesList += language[i] + ", " ;
        }
    }

    if (language.length > 1) {
        return (
            <span><strong>Languages: </strong>{languagesList}</span>
        )
    } else {
        return (
            <span><strong>Language: </strong>{languagesList}</span>
        )
    }
} 


class Card extends React.Component {
    render() {
        let nome = JSON.stringify(this.props.country.name);

        return (
            <div className='Card-wrapper'>
                <img src = {this.props.country.flag} alt = {this.props.country.name}/>
                <h2>{JSON.parse(nome.toUpperCase())}</h2>
                 
                <div className='info'>
                    <p><strong>Capital: </strong>{this.props.country.capital}</p>
                    <Languages language={this.props.country.languages}/>
                    <p><strong>Population: </strong>{(this.props.country.population).toLocaleString('us')}</p>
                    <p><strong>Currency: </strong>{this.props.country.currency}</p>
                </div>
            </div>
        ) 
    }
} 

class Main extends React.Component {
    render() {
        return (
            <main style={this.props.styleMain}>
                <div className='main-wrapper'>
                    <Card country={this.props.country}/>
                    <Button text='Select Country' onclick={this.props.changeCountry}/>
                </div>
            </main>
        )
    }
} 

class Footer extends React.Component {
    render() {
        let year = new Date().getFullYear();

        return (
            <footer style={this.props.styles} >
                <div className='footer-wrapper'>
                    <p>Copyright {year}</p> 
                </div>
            </footer>
        )
    }
} 

class App extends React.Component{
    state = {
        count: 0, 
    }

    changeCountry = () =>{
        this.setState({count: this.state.count + 1});
    }

    render () {
        return (
            <div className='app'>
                <Header styles = {this.state.styles}/>
                <Main
                    country = {countriesData[this.state.count]}
                    changeCountry = {this.changeCountry}
                />
                <Footer styles = {this.state.styles}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, rootElement);
