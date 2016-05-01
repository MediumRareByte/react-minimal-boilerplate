import React, {Component} from 'react';
let config = require('../../../config/config.json');

let SimpleComponent = React.createClass({
    render() {
        return (
            <div>
                {config.simpleComponentText}
            </div>
        )
    }
});

export default SimpleComponent;