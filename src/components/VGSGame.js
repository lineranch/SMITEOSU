import React from 'react';
import VGSCommand from './VGSCommand.js';
import VGSInput from "./VGSInput.js";

import './css/VGSGame.css';

class VGSGame extends React.Component {
    constructor(props) {
        super(props);
        this.commands = ["VER", "VG1", "VVGL"];
        this.state = {currentCommandIndex: 0};
    }


    rotateCommand() {
        this.setState({
            currentCommandIndex: this.state.currentCommandIndex == this.commands.length - 1 
            ? 0 
            : this.state.currentCommandIndex + 1
        });
    }

    render() {
        return(
            <div className="container-game">
                <VGSCommand 
                    vgsCommand={this.commands[this.state.currentCommandIndex]}
                />
                <VGSInput 
                    command={this.commands[this.state.currentCommandIndex]}
                    handleClick={() => this.rotateCommand()}
                />
            </div>
        );
    }
}

export default VGSGame;