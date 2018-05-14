import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeAdmin from './components/HomeAdmin';
import HomeUser from './components/HomeUser';
import HomeVisitor from './components/HomeVisitor';

@connect((store) => {
    return {
        isAdmin: store.currentUser.isAdmin,
        loggedIn: store.loggedIn
    };
})
export default class Home extends Component {
    render() {
        document.title = "Ágora - La plataforma de participación política de los colombianos";
        if(this.props.loggedIn)
            if(this.props.isAdmin)
                return <HomeAdmin />;
            else
                return <HomeUser />;
        else
            return <HomeVisitor />;
    }
}