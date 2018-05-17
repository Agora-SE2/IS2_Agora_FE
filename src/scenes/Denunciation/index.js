import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Divider, Form } from 'semantic-ui-react';
import './styles.css';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    };
})
export default class Denunciation extends Component {  
    constructor() {
        super();

        this.state = {
            opinion: {},
            reason: '',
        }

        this.changeTextarea = this.changeTextarea.bind(this);
    }

    changeTextarea = (e, data) => this.setState({ reason: e.target.value });

    componentWillMount() {
        const { id } = this.props.match.params;
        fetch(process.env.REACT_APP_BACK_URL + "opinions/" + id + ".json")
        .then(response => response.json())
        .then(opinion => this.setState({ opinion}))
    }

    render() {
        document.title = "Reportar un comentario | Ágora";
        const { loggedIn } = this.props;
        const { content, user } = this.state.opinion;

        if(!loggedIn) 
            return <Redirect to='/' />;

        return (
            <div className="ui page container">
                <div className="ui signup centered compact raised padded segment">
                    <h2 className="ui centered header">
                        Denunciar un comentario
                    </h2>

                    <Divider />
                    <center>
                        <i>"{content}"</i><br/>
                        por <a href={user ? "/user/" + user.id : ''}>{ user ? user.birth_name : '...' }</a>
                    </center>
                    <Divider />

                    <Form onSubmit={this.handleSubmit}>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>Utiliza lenguaje obsceno</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>Es un comentario discriminatorio</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui checkbox">
                                <input type="checkbox" name=""/>
                                <label>No está relacionado con el tema a discusión</label>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <textarea onChange={this.changeTextarea} name="reason" placeholder="Información adicional" type="text" />
                        </Form.Field>

                        <Form.Button fluid color="red">Denunciar</Form.Button>
                    </Form>
                </div>
            </div>
        );
    }
}