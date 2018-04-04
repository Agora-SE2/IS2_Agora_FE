import React, { Component } from 'react';

import { Card } from 'semantic-ui-react';

export default class Tag extends Component {    
    render() {
        return (
            <Card
                fluid={true}
                href={"/categoria/" + this.props.name}
                header={this.props.name}
            /> 
        );
    }
}