import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';

import './styles.css';

export default class CommentTextArea extends Component {
    constructor() {
        super();

        this.state = {
            comment: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.textareaChange = this.textareaChange.bind(this);
    }

    handleClick(event, type) {
        const comment = this.state.comment;
        console.log(comment, type ? "pro" : "con");
    }

    textareaChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    render() {
        return (
            <Form className="agora argument">
                <TextArea placeholder='¿Qué opinas sobre este proyecto de ley?' onChange={this.textareaChange} />
                <Button.Group fluid>
                    <Button color="green" onClick={event => this.handleClick(event, true)}>A favor</Button>
                    <Button.Or />
                    <Button color="red" onClick={event => this.handleClick(event, false)}>En contra</Button>
                </Button.Group>
            </Form>
        );
    }
}