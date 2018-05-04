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
                <div className="ui grid">
                    <div className="eight wide column">
                        <div className="ui padded segment">
                            <h2 className="ui centered header">Proyectos mejor votados</h2>
                            <C3Chart axis={{rotated: true}} data={{
                                columns: [
                                    ['x', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14'],
                                    ['data1', 200, 300, 100, 250],
                                ],
                                type: 'bar'
                            }} />
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui padded segment">
                            <h2 className="ui centered header">Proyectos peor votados</h2>
                            <C3Chart axis={{rotated: true}} data={{
                                columns: [
                                    ['x', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14'],
                                    ['data1', 200, 300, 100, 250],
                                ],
                                type: 'bar'
                            }} />
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}