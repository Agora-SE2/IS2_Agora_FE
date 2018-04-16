import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store/index.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './scenes/About';
import Arguments from './scenes/Arguments';
import Category from './scenes/Category/index.js';
import Home from './scenes/Home/index.js';
import LawProject from './scenes/LawProject/index.js';
import Login from './scenes/Login/index.js';
import Profile from './scenes/Profile/index.js';
import Search from './scenes/Search/index.js';
import Signup from './scenes/Signup/index.js';


import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
    <Provider store={store}>
      <PersistGate loading={(() => <div>Loading</div>)()} persistor={persistor}>
        <BrowserRouter>
          <div id="app">
            <Navbar />
            <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/proyectoley:id/args' component={Arguments} />
                <Route path='/proyectoley/:id' component={LawProject} />
                <Route path='/categoria/:name' component={Category}/>
                <Route path='/login' component={Login}/>
                <Route path='/search' component={Search}/>
                <Route path='/profile/:id' component={Profile}/>
                <Route path='/signup' component={Signup}/>
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
), document.getElementById('root'));
