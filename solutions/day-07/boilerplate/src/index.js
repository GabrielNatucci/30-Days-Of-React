import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        count: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
    }

    changeAnimal = () => {
        let dogUrl = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
        let catUrl = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg';

        let image = this.state.image === catUrl ? dogUrl : catUrl;

        this.setState({image});
    }

    render() {
        const count = this.state.count; 
        return (
            <div className="App">
                <div className='animal'>
                    <img src={this.state.image} alt='animal' />
                </div>

                <div>
                    <button onClick={this.changeAnimal}>Change </button>
                </div>
            </div>
        ) 
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
