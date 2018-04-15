import React, { Component } from 'react';
import { Divider, Form } from 'semantic-ui-react';

import './styles.css';

export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: "",
                password_confirmation: "",
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    }
    
    handleSubmit(event, data) {
        event.preventDefault();
        console.log(this.state);
        console.log(JSON.stringify(this.state));

        fetch(process.env.REACT_APP_BACK_URL + "users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {console.log(response); return response.json()})
        .then(userToken => console.log(userToken));
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
                        <Form.Input name="username" label="Nombre" type="text" /> 
                        <Form.Input name="email" label="Correo electrónico" type="email" onChange={this.handleInputChange} />
                        <Form.Input name="password" label="Contraseña" type="password" onChange={this.handleInputChange} />
                        <Form.Input name="password_confirmation" label="Repite tu contraseña" type="password" onChange={this.handleInputChange} />
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