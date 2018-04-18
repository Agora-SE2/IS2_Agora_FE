import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { logout } from 'services/session/actions';

@connect((store) => {
    return {}
})
export default class UserOptions extends Component {
    constructor() {
        super();
        
        this.state = {
            toProfile: false,
            toSettings: false
        }

        this.clickLogout = this.clickLogout.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.goToSettings = this.goToSettings.bind(this);
    }

    clickLogout() {
        this.props.dispatch(logout());
        this.setState({toHome: true});
    }

    goToProfile() {
        this.setState({toProfile: true});
    }

    goToSettings() {
        console.log("settings");
        this.setState({toSettings: true});
    }

    render() {
        const {toProfile, toSettings} = this.state;
        
        if(toProfile)
            return <Redirect to="/profile/1" />

        else if(toSettings)
            return <Redirect to="/settings" />
        else
            return (
            <div className="right menu">
                <div className="ui category search item">
                    <div className="ui icon input">
                        <input className="prompt" placeholder="Busca proyectos de ley..." type="text"/>
                        <i className="search link icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
                <Dropdown item text="Bienvenido, Humberto de la Calle">
                    <Dropdown.Menu>
                        <Dropdown.Header>
                            Ágora - Opciones
                        </Dropdown.Header>
                        <Dropdown.Item onClick={this.goToProfile}>Mi perfil</Dropdown.Item>
                        <Dropdown.Item onClick={this.goToSettings}>Configuración</Dropdown.Item>
                        <Dropdown.Item onClick={this.clickLogout}>Salir</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            );
    }
}