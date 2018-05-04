import React, { Component } from 'react';
// TODO: import PropTypes from 'prop-types';
import CommentList from 'components/CommentList';

class CommentListContainer extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        };
    }

    componentWillMount() {
        const {id, pro} = this.props;
        fetch(process.env.REACT_APP_BACK_URL + "opinions.json?law_project=" + id)
        .then(response => response.json())
        .then(data => {
            let comments = [];
            for(var i = 0; i < data.length; i++) {
                if((pro && data[i].pro) || (!pro && !data[i].pro))
                    comments.push(data[i])
            }

            this.setState({
                comments: comments
            })
        })
    }

    render() {
        return <CommentList comments={this.state.comments} />
    }
}

export default CommentListContainer;