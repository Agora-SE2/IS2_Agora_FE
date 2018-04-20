import React, { Component } from 'react';

import { Card } from 'semantic-ui-react';

export default class Tag extends Component {    
    render() {
        return (
            <Card
                href={"/search?tag=" + this.props.name}
                header={this.props.name}
            /> 
        );
    }
}