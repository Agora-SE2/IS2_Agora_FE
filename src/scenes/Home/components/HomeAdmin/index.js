import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'components/Chart';

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
                    <Chart data={[5,10,1,3]} size={[500,500]} />
                </div>
            </div>
        );
    }
}