import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { login } from 'actions';

import './styles.css';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: "",
                remember_me: "false"
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

        fetch(process.env.REACT_APP_BACK_URL + "users/sign_in", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .catch(reason => console.log(reason))
        .then(response => {
            console.log(response.status);
            if(response.status === 200) {
                login(1);
            }
        })
    }
    

    render() {
        return (
            <div className="ui page container">
                <div className="ui login compact segment">
                    <h2 className="ui centered header">
                        Inicia sesión en Ágora
                    </h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input name="email" label="Correo electrónico" type="email" onChange={this.handleInputChange} />
                        <Form.Input name="password" label="Contraseña" type="password" onChange={this.handleInputChange} />
                        <h4 className="ui centered header">
                            <div className="sub header">¿Aún no estás registrado? <a href="/login">Regístrate en Ágora</a>.
                            </div>
                        </h4>
                        <Form.Button fluid color="green">Iniciar sesión</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}