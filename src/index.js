import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';

import About from './scenes/About/index.js';
import Arguments from './scenes/Arguments/index.js';
import Category from './scenes/Category/index.js';
import Home from './scenes/Home/index.js';
import LawProject from './scenes/LawProject/index.js';
import Profile from './scenes/Profile/index.js';
import Register from './scenes/Register/index.js';
import Search from './scenes/Search/index.js';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proyectoley:id/args' component={Arguments} />
            <Route path='/proyectoley/:id' component={LawProject} />
            <Route path='/categoria' component={Category}/>
            <Route path='/search' component={Search}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/register' component={Register}/>
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
), document.getElementById('root'));
