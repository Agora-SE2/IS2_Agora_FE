import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { logout } from 'services/session/actions';

@connect((store) => {
    return {
        username: store.currentUser.userName,
        userId: store.currentUser.id
    }
})
export default class UserOptions extends Component {
    constructor() {
        super();

        this.clickLogout = this.clickLogout.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.goToSettings = this.goToSettings.bind(this);
    }

    clickLogout() {
        this.props.dispatch(logout());  // TODO: wait for dispatch to finish before redirecting!
        window.location.replace("/");        
    }

    goToProfile() {
        window.location.replace("/profile/" + this.props.userId);
    }

    goToSettings() {
        window.location.replace("/settings");
    }

    render() {
        return (
            <div className="right menu">
                <div className="ui category search item">
                    <div className="ui icon input">
                        <input className="prompt" placeholder="Busca proyectos de ley..." type="text"/>
                        <i className="search link icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
                <Dropdown item text={"Bienvenido, @" + this.props.username}>
                    <Dropdown.Menu style={{zIndex: 100}}>
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