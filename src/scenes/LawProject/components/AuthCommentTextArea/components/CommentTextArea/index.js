import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';

import { toAgoraDate } from 'services/api/agora-helpers.js';

import './styles.css';

// TODO: yes, no, projectId props are required - use prop-types!

export default class CommentTextArea extends Component {
    constructor() {
        super();

        this.state = {
            comment: "",
            loading: false,
            successComment: false,
            successVote: false,
            error: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.textareaChange = this.textareaChange.bind(this);
    }

    handleClick(event, positiveComment) {
        const comment = this.state.comment;
        console.log((new Date()).toISOString().split('T')[0]);

        // update vote amount
        let updateWrapper = {
            law_project: {}
        };

        if(positiveComment) {
            updateWrapper.law_project = { yes_votes: this.props.yes + 1};
        } else {
            updateWrapper.law_project = { not_votes: this.props.no + 1};
        }

        console.log(JSON.stringify(updateWrapper));

        this.setState({loading: true});

        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + this.props.projectId + ".json", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateWrapper)
        })
        .then(response => {
            if (response.status === 200) {
                console.log("successful vote!");
                
                this.setState((prevState, props) => ({
                    successVote: true,
                    loading: comment.length > 0
                }));
            } else {
                console.error(response.status, "error updating vote count");
                this.setState((prevState, props) => ({
                    loading: false,
                    error: true
                }));
            }
        });

        // post comment to server
        if(comment.length > 0) {
            console.log(comment.length, comment)
            fetch(process.env.REACT_APP_BACK_URL + "opinions.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: comment,
                    date: toAgoraDate(new Date()),
                    like: 0,
                    pro: positiveComment
                })
            }).then(response => {
                console.log(response);
                if(response.status === 200) {
                    this.setState(prevState => ({
                        loading: false,
                        successComment: true
                    }));
                } else {
                    console.error(response.status, "error commenting");
                    this.setState((prevState, props) => ({
                        loading: false,
                        error: true
                    }));
                }
            });
        }
    }

    textareaChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    render() {
        const {loading} = this.state;

        if(loading) {
            return (
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            );
        }
        else return (
            <Form className="agora argument">
                <TextArea placeholder='¿Qué opinas sobre este proyecto de ley?' onChange={this.textareaChange} />
                <Button.Group fluid>
                    <Button id="aFavor" onClick={event => this.handleClick(event, true)}>A favor</Button>
                    <Button.Or />
                    <Button id="enContra" onClick={event => this.handleClick(event, false)}>En contra</Button>
                </Button.Group>
            </Form>
        );
    }
}