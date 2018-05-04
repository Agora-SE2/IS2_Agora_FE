import React, { Component } from 'react';
import { connect } from 'react-redux';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

@connect((store) => {
    console.log(store.currentUser)
    return {
        username: store.currentUser.userName
    };
})
export default class HomeAdmin extends Component {
    render() {
        return (
            <div className="ui page container">
                <div className="ui red inverted padded segment">
                    <h1 className="ui centered header">Bienvenido, {this.props.username}</h1>
                </div>
                <div className="ui segment">
                <C3Chart data={{
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ]
                 }} />
                </div>
            </div>
        );
    }
}