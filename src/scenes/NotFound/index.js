import React, { Component } from 'react';

export default class NotFound extends Component {
    render() {
        return (
            <div className="ui page container">
                <h1 className="ui header">Oops!
                    <div className="sub header">No pudimos encontrar esta página. :(</div>
                </h1>
            </div>
        );
    }
}