import React, { Component } from 'react';
import { Divider, Form } from 'semantic-ui-react';

import './styles.css';

export default class Register extends Component {
    render() {
        return (
            <div className="ui page container">
                <div className="ui signup centered compact segment">
                    <h2 className="ui centered header">
                        Regístrate
                        <div className="sub header">
                            Al registrarte en Ágora podrás participar en la<br/>
                            comunidad de debate político más grande de Colombia.
                        </div>
                    </h2>

                    <Divider />

                    <Form>
                        <Form.Input label="Nombre" type="text" />
                        <Form.Input label="Correo electrónico" type="email" />
                        <Form.Input label="Contraseña" type="password" />
                        <Form.Input label="Repite tu contraseña" type="password" />
                        <h4 className="ui centered header">
                            <div className="sub header">¿Ya estás registrado? <a href="/login">Inicia sesión en </a>.
                            </div>
                        </h4>
                        <Form.Button fluid color="green">¡Regístrate!</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}