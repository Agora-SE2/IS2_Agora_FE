import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, TextArea } from 'semantic-ui-react';

import { toAgoraDate } from 'services/api/agora-helpers.js';

import './styles.css';

// TODO: yes, no, projectId props are required - use prop-types!

@connect((store) => {
    console.log(store.currentUser);
    return {
        userId: store.currentUser.id
    };
})
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

    handleClick(event, positive) {
        const { comment } = this.state;
        const vote = positive ? { yes_votes: this.props.yes + 1 } : { not_votes: this.props.no + 1 };
        
        this.setState({loading: true});

        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + this.props.projectId + ".json", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                law_project: {
                    vote: vote
                }
            })
        })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
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
            return response.json()
        })
        .then(data => console.log(data));

        // post comment to server
        if(comment.length > 0) {
            console.log({
                opinion: {
                    content: comment,
                    date: toAgoraDate(new Date()),
                    like: 0,
                    pro: positive,
                    user_id: this.props.userId,
                    law_project_id: this.props.projectId
                }
            })

            fetch(process.env.REACT_APP_BACK_URL + "opinions.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    opinion: {
                        content: comment,
                        date: toAgoraDate(new Date()),
                        like: 0,
                        pro: positive,
                        user_id: this.props.userId,
                        law_project_id: this.props.projectId
                    }
                })
            }).then(response => {
                console.log(response);
                if(response.status === 200 || response.status === 201) {
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
                return response.json()
            }).then(data => console.log(data));
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