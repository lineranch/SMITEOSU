import React from 'react';
import fireCallbackOnSuccess from './utility/fireCallbackOnSuccess.js';
import './VGSInput.css';

class VGSInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }


    inputMatchesCommand(e) {

        const userInput = e.target.value;
        this.setState({
            inputValue: fireCallbackOnSuccess(userInput.toUpperCase(), this.props.command, () => this.props.handleClick()) 
            ? ""
            : userInput
        })
    }
    

    render() {
        return (
            <input type="text" value={this.state.inputValue} onChange={(e) => this.inputMatchesCommand(e)}>

            </input>
        );
    }
}

export default VGSInput;