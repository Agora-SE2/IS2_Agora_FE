import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from 'services/session/actions';

import './styles.css';

// TODO: for the love of God, move these methods away from here.
@connect((store) => {
    return {};
})
export default class SigninForm extends Component {
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
            if(response) {
                console.log(response.status);
                if(response.status === 200) {
                    this.props.dispatch(login(1));
                }
            }
        })
    }

    render() {
        return (
            <div className="ui signin container">
                <h3 className="ui centered header">
                    Inicia sesión en Ágora
                </h3>
                <div className="ui divider"></div>
                <form className="ui signin form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input name="email" placeholder="Correo electrónico" type="text" onChange={this.handleInputChange}/>
                    </div>
                    <div className="field">
                        <input name="password" placeholder="Contraseña" type="password" onChange={this.handleInputChange} />
                    </div>
                    <h4 className="ui centered header">
                        Si no tienes una cuenta, <a href="/signup">regístrate ahora</a>.
                    </h4>
                    <button id="loginButton" className="ui fluid button" type="submit">Iniciar sesión</button>
                    <button className="ui facebook button" id="facebookLogin">
                        <i className="facebook icon"></i>
                            Facebook
                    </button>
                    <button className="ui google plus button" id="googleLogin">
                        <i className="google plus icon"></i>
                            Google Plus
                    </button>
                </form>
            </div>
        );
    }
}