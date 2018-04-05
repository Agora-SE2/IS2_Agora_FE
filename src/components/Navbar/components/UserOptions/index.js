import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class UserOptions extends Component {
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
                    <Dropdown.Item>Salir</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        );
    }
}