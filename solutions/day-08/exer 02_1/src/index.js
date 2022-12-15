import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fotoMinha from './images/IMG_20210215_180347_878.jpg'

const rootElement = document.getElementById('root');

const fotoMinhaImg = <img src = {fotoMinha} alt = 'foto minha'/>

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

class UserCard extends React.Component {
    render() {
        return (
            <div className='UserCard'>
                <div className = "UserCard-wrapper">
                    <div className = "eu">
                        {fotoMinhaImg}
                        <h3>GABRIEL NATUCCI &#10003;</h3>  
                    </div>
                    <p className = 'programmer'>Programmer </p>
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
                    <UserCard/>
                    <div className = "skills">
                        <Button text = "Greet People" onclick = {this.props.greetPeople}/>
                        <Button text = "Show Time" onclick = {this.props.showTime}/> 
                        <Button text = "Change Background" onclick = {this.props.changeBackground}/>
                    </div>
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
        stylesMain: {
            backgroundColor: 'white',
            color: 'black'
        },

        styles: {
            backgroundColor: '#60dafb',
            color: 'black'
        }
    }

    mes = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]

    greetPeople = () => {alert("30 DAS OF REACT!!")}
     
    showTime = () => {
        let date = new Date();

        let dia = "Hoje é dia " + date.getDate() + " de " + this.mes[date.getMonth()] + " de " + date.getFullYear();
        alert(dia);
    }

    changeBackground = () => {
        let styles = {
            backgroundColor: '',
            color: '',
        }

        let stylesMain = {
            backgroundColor: '',
            color: '',
        }
        
        if (this.state.styles.backgroundColor === '#60dafb') {
            styles.backgroundColor = '#0f172a';
            styles.color = 'white';
            stylesMain = styles;
        } else {
            stylesMain.backgroundColor = 'white';
            stylesMain.color = 'black';
            styles.backgroundColor = '#60dafb';
            styles.color = 'black';
        }

        this.setState({styles});
        this.setState({stylesMain});
    }

    render () {
        return (
            <div className='app'>
                <Header styles = {this.state.styles}/>
                <Main
                    style = {this.state.styles}
                    styleMain = {this.state.stylesMain}
                    greetPeople = {this.greetPeople} 
                    showTime = {this.showTime} 
                    changeBackground = {this.changeBackground} 
                />
                <Footer styles = {this.state.styles}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, rootElement);
