import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import LoginForm from 'components/LoginForm/index.js';

import './styles.css';

export default class Login extends Component {
    render() {
        return (
            <div className="ui page container">
                <div className="ui login compact segment">
                    <h2 className="ui centered header">
                        Inicia sesión en Ágora
                    </h2>
                    <Form>
                        <Form.Input label="Nombre" type="text" />
                        <Form.Input label="Correo electrónico" type="email" />
                        <h4 className="ui centered header">
                            <div className="sub header">¿Aún no estás registrado? <a href="/login">Regístrate en Ágora</a>.
                            </div>
                        </h4>
                        <Form.Button fluid color="green">¡Regístrate!</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}