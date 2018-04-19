import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import validator from 'validator';

import { connect } from 'react-redux';
import { login } from 'services/session/actions';

import Loading from 'components/Loading';
import WarningFormLabel from 'components/WarningFormLabel';

import './styles.css';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    };
})
export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            changed: false,
            done: false,
            emailExists: false,
            errorPassword: false,
            loading: false,
            passwordExists: false,
            user: {
                email: "",
                password: ""
            },
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
        this.setState({
            emailExists: value.length !== 0,
            validEmail: validator.isEmail(value)
        });
        this.changeUserState(value, "email");
    }

    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({ passwordExists: value.length !== 0 });
        this.changeUserState(value, "password");
    }    
    
    handleSubmit(event, data) {
        event.preventDefault();
        this.setState({ changed: true });
        console.log(this.state.user);
        const {validEmail, passwordExists} = this.state;

        if(validEmail && passwordExists) {
            console.log(this.state.loading);
            
            this.setState({ loading: true });
            
            fetch(process.env.REACT_APP_BACK_URL + "users/sign_in.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.user)
            })
            .catch(reason => console.error(reason))
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    this.props.dispatch(login(data));
                    console.log(data);
                    this.setState({
                        done: true,
                        errorPassword: false,
                        loading: false
                    })
                } else {
                    this.setState({
                        errorPassword: true,
                        loading: false
                    })
                }
            });            
        }
    }
    
    render() {
        const {changed, done, emailExists, errorPassword, loading, validEmail} = this.state;
        let messageView;

        if(done || this.props.loggedIn)
            return <Redirect to="/" />

        if(loading)
            messageView = <Loading />;
        else if(errorPassword)
            messageView = (<Message negative>
                <Message.Header>Oops!</Message.Header>
                <p>No reconocemos estos datos. Intenta de nuevo.</p>
              </Message>);

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
                                allowed={changed && emailExists && !(validEmail)} 
                                message={"Correo inválido"} />
                            <WarningFormLabel 
                                allowed={changed && !(emailExists)} 
                                message={"Por favor ingrese un correo."} />
                        </Form.Field>
                        <Form.Field>
                            <input name="password" placeholder="Contraseña" type="password" onChange={this.handlePasswordChange} />
                            <WarningFormLabel 
                                allowed={changed && !(this.state.passwordExists)} 
                                message={"Por favor ingrese una contraseña."} />
                        </Form.Field>
                        {messageView}
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