import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import CategoryPage from './CategoryPage.js';
import ProfilePage from './ProfilePage.js';
import SearchPage from './SearchPage.js';
import ProyectoLeyPage from './ProyectoLeyPage.js';

import './Page.css';

export default class Page extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route path='/proyectoley' component={ProyectoLeyPage}/>
                    <Route path='/categoria' component={CategoryPage}/>
                    <Route path='/search' component={SearchPage}/>
                    <Route path='/profile' component={ProfilePage}/>
                </Switch>
            </main>
        );
    }
}