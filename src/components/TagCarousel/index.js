import React, { Component } from 'react';

import Tag from './components/Tag/index.js'

export default class TagCarousel extends Component {
    constructor() {
        super();

        this.state = {
            tags: []
        };
    }

    componentWillMount() {        
        fetch(process.env.REACT_APP_BACK_URL + "tags.json?page=1")
        .then(response => {
            return response.json();
        })
        .then(data => this.setState({
            tags: data.slice(0,8)
        }));
    }

    render() {
        var tagCards = [];
        var tags = this.state.tags;

        for(var i=0; i<tags.length; i++) {
            tagCards.push(<Tag key={i} name={tags[i].name} />)
        }
        
        return (
            <div className="ui tag carousel segment">
                <h2>Categorías de proyectos de ley</h2>
                <div className="ui divider"></div>
                <div className="ui cards">
                    {tagCards.slice(0,2)}
                </div>
                <div className="ui cards">
                    {tagCards.slice(3,5)}
                </div>
                <div className="ui cards">
                    {tagCards.slice(6,8)}
                </div>
            </div>
        );
    }
}