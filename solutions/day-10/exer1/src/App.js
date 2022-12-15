import Header from  './components/header/Header.js';
import Main from  './components/main/Main.js';
import Footer from  './components/footer/Footer.js';
import React from 'react';

class App extends React.Component { 
    state = {
        main: {
            main: {
                backgroundColor: 'rgb(30,30,30)',
            },
            div: {
            },
            p: {
                color: 'white'
            },
            h1: {
                color: 'rgb(170,120,240)'
            },
        },
        headerFooter: {
            p: {
                color: 'rgb(170,120,240)'
            },
            div: {
                backgroundColor: 'rgb(35,35,35)',
            },
        },
    }

    changeColors = () => {
        let main = {
            main: {
                backgroundColor: '',
            },
            div: {
                backgroundColor: '',
            },
            p: {
                color: ''
            },
            h1: {
                color: ''
            },
        }

        let headerFooter = {
            p: {
                color: ''
            },
            div: {
                backgroundColor: '',
            },
        }

        if(this.state.main.p.color === 'white') {
            main.p.color = 'black';
            main.h1.color = 'black';
            main.main.backgroundColor = 'rgb(250,250,250)';
            headerFooter.div.backgroundColor = main.main.backgroundColor;
        } else {
            main.p.color = 'white';
            main.h1.color = 'rgb(170,120,240)';
            main.main.backgroundColor = 'rgb(30,30,30)';
            headerFooter.div.backgroundColor = 'rgb(35,35,35)';
        }
        headerFooter.p.color = main.h1.color

        this.setState({main});
        this.setState({headerFooter});
    }

    render() {
        return (
            <div className="App">
                <Header
                    styles={this.state.headerFooter}
                    change={this.changeColors}
                /> 
                <Main
                    styles={this.state.main}
                /> 
                <Footer
                    styles={this.state.headerFooter}
                /> 
            </div>
        );
    }
}

export default App;
