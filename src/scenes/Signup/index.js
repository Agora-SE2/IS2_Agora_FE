import React, { Component } from 'react';
import { Divider, Form } from 'semantic-ui-react';

import './styles.css';

export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            useremail: "",
            userpass: "",
            userconf: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event, data) {
        event.preventDefault();
        console.log(this.state);
        
        fetch(process.env.REACT_APP_BACK_URL + "users/sign_up", {
            method: 'POST',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.useremail,
                encrypted_password: this.state.userpass,
                signin_count: 0
            })
        }).then(response => {console.log(response); return response.json()})
        .then(data => console.log(data));
    }
    
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

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input name="username" label="Nombre" ype="text" onChange={this.handleInputChange} />
                        <Form.Input name="useremail" label="Correo electrónico" type="email" onChange={this.handleInputChange} />
                        <Form.Input name="userpass" label="Contraseña" type="password" onChange={this.handleInputChange} />
                        <Form.Input name="userconf" label="Repite tu contraseña" type="password" onChange={this.handleInputChange} />
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