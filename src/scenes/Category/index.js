import React, { Component } from 'react';

export default class Category extends Component {
    constructor() {
        super();

        this.state = {
            tag: {}
        };
    }

    componentWillMount() {    
        const {id} = this.props.match.params;

        fetch(process.env.REACT_APP_BACK_URL + "tags/" + id + ".json?page=1")
        .then(response => {
            return response.json();
        })
        .then(data => this.setState({
            tag: data
        }));
    }
    
    render() {
        return (
            <div className="ui page container">
                <h1 className="ui centered header">CATEGORY_NAME
                    <div className="sub header">Categoría</div>
                </h1>
            </div>
        );
    }
}