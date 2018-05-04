import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

@connect((store) => {
    console.log(store);
    return {
        isAdmin: store.currentUser.isAdmin,
        loggedIn: store.loggedIn
    };
})
export default class Reports extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "opinions.json?reported=true")
        .then(response => response.json())
        .then(data => {
            this.setState({comments: data});
        })
    }

    render() {
        const {loggedIn, isAdmin} = this.props;

        if(loggedIn && isAdmin)    // FIXME:
            return <Redirect to="/" />

        return (
            <div className="ui page container">
                <h1 className="ui header">Comentarios denunciados</h1>
            </div>
        )
    }
}