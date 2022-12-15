import React from 'react';
import Main from './component/main/Main';

class App extends React.Component {
    state = {
        top: parseInt(Math.random()*80) + "%",
        left: parseInt(Math.random()*80) + "%",
    }

    changePos = () => {
        let top;
        let left;

        top = parseInt(Math.random()*80) + "%";
        left = parseInt(Math.random()*80) + "%";

        this.setState({top})
        this.setState({left})
    }

    render() {
        return (
            <div className="App">
                <Main styles={this.state} changePos={this.changePos}/>
            </div>
        );
    }
}

export default App;
