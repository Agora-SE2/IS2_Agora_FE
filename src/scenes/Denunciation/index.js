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
export default class Denunciation extends Component {
    
    render() {

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