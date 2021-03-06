import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './scenes/About';
import Arguments from './scenes/Arguments';
import CreateLawProject from './scenes/CreateLawProject';
import EditLawProject from './scenes/EditLawProject';
import Home from './scenes/Home';
import LawProject from './scenes/LawProject';
import Login from './scenes/Login';
import NotFound from './scenes/NotFound';
import Profile from './scenes/Profile';
import Reports from './scenes/Reports';
import StatPDFView from './scenes/StatPDFView';
import Search from './scenes/Search';
import Settings from './scenes/Settings';
import Signup from './scenes/Signup';
import SignupSetup from './scenes/SignupSetup';
import PDFView from './scenes/PDFView';
import Denunciation from './scenes/Denunciation';

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
                <Route exact path='/proyectoley/crear' component={CreateLawProject} />
                <Route exact path='/proyectoley/:id/args' component={Arguments} />
                <Route exact path='/proyectoley/:id/edit' component={EditLawProject}/>
                <Route exact path='/proyectoley/:id/pdf' component={PDFView}/>
                <Route exact path='/report/:id' component={Denunciation} />
                <Route path='/proyectoley/:id' component={LawProject} />
                <Route path='/pdf/stats/:stat' component={StatPDFView} />
                <Route path='/login' component={Login}/>
                <Route path='/search' component={Search}/>
                <Route path='/profile/:id' component={Profile}/>
                <Route path='/reports' component={Reports}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/setup' component={SignupSetup}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/404' component={NotFound} />
                <Redirect to='/404' />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
), document.getElementById('root'));
