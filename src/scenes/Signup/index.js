import React, { Component } from 'react';
import { Divider, Form, Label } from 'semantic-ui-react';
import validator from 'validator';

import WarningFormLabel from './components/WarningFormLabel';

import './styles.css';

export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: "",
                password_confirmation: "",
            },
            changed: false,
            validEmail: false,
            validPasswordLength: false,
            validConfirmPassword: false,
            validUsername: false
        }

        this.handleConfirmChange = this.handleConfirmChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.stateUserChange = this.stateUserChange.bind(this);
    }

    stateUserChange(value, name) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value,
            }
        }));
    }

    handleConfirmChange(event) {
        const value = event.target.value;
        const valid = this.state.user.password == this.state.user.password_confirmation;
        this.setState({validEmail: valid});
        this.stateUserChange(value, "password_confirmation");
    }

    handleEmailChange(event) {
        const value = event.target.value;
        const valid = validator.isEmail(value);
        this.setState({validEmail: valid});
        this.stateUserChange(value, "email");
    }    

    handlePasswordChange(event) {
        const value = event.target.value;
        const valid = value.length > 6;
        this.setState({validPasswordLength: valid});
        this.stateUserChange(value, "password");
    }

    handleUsernameChange(event) {
        const value = event.target.value;
        const valid = validator.isAlphanumeric(value);
        this.setState({validUsername: valid});
        // this.stateUserChange(value, "username");
    }

    handleSubmit(event, data) {
        event.preventDefault();

        const {validEmail, validPasswordLength} = this.state;
        if(validEmail && validPasswordLength)
            fetch(process.env.REACT_APP_BACK_URL + "users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then(response => {console.log(response)});
        else {
            this.setState({changed: true});
        }
    }

    render() {
        return (
            <div className="ui page container">
                <div className="ui signup centered compact raised segment">
                    <h2 className="ui centered header">
                        Regístrate
                        <div className="sub header">
                            Al registrarte en Ágora podrás participar en la<br/>
                            comunidad de debate político más grande de Colombia.
                        </div>
                    </h2>

                    <Divider />

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input name="username" placeholder="Nombre de usuario (ej. @miusuario123)" type="text" onChange={this.handleUsernameChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validUsername)} 
                                message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                        </Form.Field>

                        <Form.Field>
                            <input name="email" placeholder="Correo electrónico" type="email" onChange={this.handleEmailChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validEmail)} 
                                message={"Este correo es inválido"} />
                        </Form.Field>

                        <Form.Field>
                            <input name="password" placeholder="Contraseña" type="password" onChange={this.handlePasswordChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validPasswordLength)} 
                                message={"La contraseña es demasiado corta"} />
                        </Form.Field>

                        <Form.Field>
                            <input name="password_confirmation" placeholder="Repite tu contraseña" type="password" onChange={this.handleConfirmChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validConfirmPassword)} 
                                message={"Las contraseñas no coinciden"} />
                        </Form.Field>

                        <h4 className="ui centered header">
                            <div className="sub header">¿Ya estás registrado? <a href="/login">Inicia sesión en Ágora</a>.
                            </div>
                        </h4>
                        <Form.Button fluid color="green">¡Regístrate!</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}