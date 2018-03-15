import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProyectoLeyPage from './ProyectoLeyPage.js';
import ProyectoLeyArgsPage from './ProyectoLeyArgsPage.js';

export default class ProyectoLeyPageRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/proyectoley:id/args' component={ProyectoLeyArgsPage} />
                <Route path='/proyectoley/:id' component={ProyectoLeyPage} />
            </Switch>
        );
    }
}