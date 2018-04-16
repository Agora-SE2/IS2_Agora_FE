import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import validator from 'validator';

import { connect } from 'react-redux';
import { login } from 'actions';

import WarningFormLabel from 'components/WarningFormLabel';

import './styles.css';

@connect((store) => {
    return {};
})
export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: "",
                remember_me: "false"
            },
            changed: false,
            validEmail: false,
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUserState = this.changeUserState.bind(this);
    }

    changeUserState(value, name) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value,
            }
        }));
    }

    handleEmailChange(event) {
        const value = event.target.value;
        const valid = validator.isEmail(value);
        this.setState({validEmail: valid});
        this.changeUserState(value, "email");
    }

    handlePasswordChange(event) {
        const value = event.target.value;
        this.changeUserState(value, "password");
    }    
    
    handleSubmit(event, data) {
        event.preventDefault();
        console.log(this.state);
        const {validEmail} = this.state;

        if(validEmail) {
            fetch(process.env.REACT_APP_BACK_URL + "users/sign_in", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .catch(reason => console.log(reason))
            .then(response => {
                if(response) {
                    console.log(response.status);
                    if(response.status === 200) {
                        this.props.dispatch(login(1));
                    }
                }
            });
        } else {
            this.setState({changed: true});
        }
    }
    
    render() {
        return (
            <div className="ui page container">
                <div className="ui login compact raised segment">
                    <h2 className="ui centered header">
                        Inicia sesión en Ágora
                    </h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input name="email" placeholder="Correo electrónico" type="email" onChange={this.handleEmailChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validEmail)} 
                                message={"Correo inválido"} />
                        </Form.Field>
                        <Form.Field>
                            <input name="password" placeholder="Contraseña" type="password" onChange={this.handlePasswordChange} />
                            <WarningFormLabel 
                                allowed={this.state.changed && !(this.state.validEmail)} 
                                message={"Correo inválido"} />
                        </Form.Field>
                        <h4 className="ui centered header">
                            <div className="sub header">¿Aún no estás registrado? <a href="/signup">Regístrate en Ágora</a>.
                            </div>
                        </h4>
                        <Form.Button fluid color="green">Iniciar sesión</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}