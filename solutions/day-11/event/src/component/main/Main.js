import React from "react";
import './main.css'

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className='main-wrapper' style={this.props.styles} onMouseEnter={this.props.changePos}>
                    <p>30 days of react</p>
                </div>
            </main>
        )
    }
}

export default Main;
