import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='header-wrapper'>
                    <div className='logo-div'>
                        <p className='logo'>Natucci</p>
                    </div>
                    <nav>
                        <button className="navbar">Home</button>
                        <button className="navbar">About us</button>
                    </nav>
                </div>
            </header> 
        ) 
    }
}

class Main extends React.Component {
    render() {
        return (
            <main style = {this.props.styles}>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
                <h1>Estamos Vivendo!</h1>
                <p>Lorem Ipsum</p>
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
    render() {
        let hora = new Date().getHours();
        let styles;
        console.log(hora);

        if (hora < 12) {
            console.log("Morning");
            styles = {backgroundColor: '#a9f1f6', color: 'black'}
        } else if (hora < 18){
            console.log("Evening");
            styles = {backgroundColor: '#F4633C', color: 'white'}
        } else {
            console.log("Night");
            styles = {backgroundColor: '#181D31', color: 'white'}
        }

        return (
            <div className='app-wrapper'>
                <Header/>
                <Main styles = {styles}/>
                <Footer/>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
