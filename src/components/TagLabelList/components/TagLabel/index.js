import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

export default class TagLabel extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "tags/" + this.props.id + ".json")
        .then(response => response.json())
        .then(data => this.setState({ name: data.name }))
    }
    
    render() {
        return (
            <Label as="a" href={"/categoria/" + this.props.id} color="red" horizontal>{this.state.name}</Label>            
        );
    }
}