import React, { Component } from 'react';

export default class LawProject extends Component {
    render() {
        return (
            <h1>ProyectoLeyPage {this.props.match.params.id}</h1>
        );
    }
}