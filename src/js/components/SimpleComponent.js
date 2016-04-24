import React, {Component} from 'react';
var config = require('../../../config/config.json');

class SimpleComponent extends Component{
    render() {
        return (
            <div>
                {config.simpleComponentText}
            </div>
        )
    }
}

export default SimpleComponent;