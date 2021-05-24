import React from 'react';

import './css/VGSCommand.css';

class VGSCommand extends React.Component {

    render() {
        return(
            <div className="item-vgs_command">
                {this.props.vgsCommand}
            </div>
        );
    }
}

export default VGSCommand;