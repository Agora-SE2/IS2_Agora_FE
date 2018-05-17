import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Form, Message } from 'semantic-ui-react';
import validator from 'validator';

import { login } from 'services/session/actions';

import Loading from 'components/Loading';
import WarningFormLabel from 'components/WarningFormLabel';

import './styles.css';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    };
})
export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: "",
                password_confirmation: "",
                userName: '',
                isAdmin: 0,
                birthName: '',
                description: ''
            },
            changed: false,
            loading: false,
            emailTaken: false,
            validEmail: false,
            validPasswordLength: false,
            validConfirmPassword: false,
            validUsername: false
        }

        this.handleConfirmChange = this.handleConfirmChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
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
        const valid = this.state.user.password === this.state.user.password_confirmation;
        this.setState({validConfirmPassword: valid});
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
        const valid = value.length >= 6;
        this.setState({validPasswordLength: valid});
        this.stateUserChange(value, "password");
    }

    handleUsernameChange(event) {
        const value = event.target.value;
        const valid = validator.isAlphanumeric(value);
        this.setState({validUsername: valid});
        this.stateUserChange(value, "userName");
    }

    handleSubmit(event, data) {
        event.preventDefault();
        const {user, validEmail, validPasswordLength} = this.state;

        if(validEmail && validPasswordLength) {
            this.setState({ loading: true });
            fetch(process.env.REACT_APP_BACK_URL + "users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                if(data.email[0] !== "has already been taken") {   // TODO: this is not right
                    this.props.dispatch(login(data));
                } else {
                    this.setState({ 
                        emailTaken: true,
                        loading: false,
                    })
                }
            })
        } else {
            this.setState({changed: true});
        }
    }

    render() {
        const {changed, loading, emailTaken} = this.state;
        let messageView;

        if(this.props.loggedIn)
            window.location.replace("/setup");

        if(loading) {
            messageView = <Loading />;
        } else if(emailTaken)
            messageView = (<Message negative>
                <Message.Header>Oops!</Message.Header>
                <p>¡Este correo ya está registrado! Intenta otro correo o <a href="/login">inicia sesión</a>.</p>
              </Message>);

        return (
            <div className="ui page container">
                <div className="ui signup centered compact raised segment">
                    <h2 className="ui centered header">
                        Denunciar un comentario
                    </h2>

                    <Divider />

                        <p><i>"Aquí va el comentario"</i></p>

                    <Divider />

                    <Form onSubmit={this.handleSubmit}>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>Utiliza lenguaje obseno</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>Es un comentario xenofobo</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>No está relacionado con el tema a discusión</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <input name="" placeholder="Información adicional" type="text" />
                        </Form.Field>

                        <Form.Button fluid color="red">Denunciar</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}