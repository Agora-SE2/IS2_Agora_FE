import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { logout } from 'actions';

@connect((store) => {
    return {}
})
export default class UserOptions extends Component {
    constructor() {
        super();

        this.clickLogout = this.clickLogout.bind(this);
    }

    clickLogout() {
        this.props.dispatch(logout());
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
            <Dropdown item text="Bienvenido, Humberto de la Calle">
                <Dropdown.Menu>
                    <Dropdown.Header>
                        Ágora - Opciones
                    </Dropdown.Header>
                    <Dropdown.Item>Mi perfil</Dropdown.Item>
                    <Dropdown.Item>Configuración</Dropdown.Item>
                    <Dropdown.Item onClick={this.clickLogout}>Salir</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        );
    }
}