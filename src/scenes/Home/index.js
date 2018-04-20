import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeUser from './components/HomeUser';
import HomeVisitor from './components/HomeVisitor';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    };
})
export default class Home extends Component {
    render() {
        if(this.props.loggedIn)
            return <HomeUser />;   // TODO: not really
        else
            return <HomeVisitor />;
    }
}