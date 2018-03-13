import React, { Component } from 'react';
import './SigninForm.css';

export default class SigninForm extends Component {
    render() {
        return (
            <div className="ui signin container">
                <h3 className="ui centered header">
                    Inicia sesión en Ágora
                </h3>
                <div className="ui divider"></div>
                <form class="ui signin form">
                    <div class="field">
                        <input name="email" placeholder="Correo electrónico" type="text" />
                    </div>
                    <div class="field">
                        <input name="password" placeholder="Contraseña" type="password" />
                    </div>
                    <h4 className="ui centered header">
                        Si no tienes una cuenta, <a href="#">regístrate ahora</a>.
                    </h4>
                    <button class="ui green inverted button" type="submit">Iniciar sesión</button>
                </form>
            </div>
        );
    }
}