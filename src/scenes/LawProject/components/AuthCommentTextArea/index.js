import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import CommentTextArea from './components/CommentTextArea';

export default class AuthCommentTextArea extends Component {
    render() {
        const {loggedIn, id, yes_votes, not_votes} = this.props;
        if(loggedIn) {
            return (
            <div className="ui agora segment">
                <h2 className="ui centered header">
                    ¿Estás a favor o en contra de este proyecto?
                    <div className="sub header">Déjanos aquí tu opinión.</div>
                </h2>
                <CommentTextArea projectId={id} yes={yes_votes} no={not_votes} />
            </div>);
        } else {
            return (
            <Message>
                <Message.Header>¿Quieres votar y opinar?</Message.Header>
                <p>Participa en la comunidad de Ágora <a href="/login">iniciando sesión</a> o, si aún 
                no tienes una cuenta, <a href="/signup">registrándote</a>.</p>
            </Message>
            );
        }
    }
}