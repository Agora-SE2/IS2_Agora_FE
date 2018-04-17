import React, { Component } from 'react';

import Loading from 'components/Loading';
import Tag from './components/Tag'

export default class TagCarousel extends Component {
    constructor() {
        super();

        this.state = {
            ready: false,
            tags: []
        };
    }

    componentWillMount() {        
        fetch(process.env.REACT_APP_BACK_URL + "tags.json?page=1")
        .then(response => {
            return response.json();
        })
        .then(data => this.setState({
            ready: true,
            tags: data.length > 0 ? data.slice(0,8) : []
        }));
    }

    render() {
        var tagCards = [];
        let {ready, tags} = this.state;

        if(!ready) {
            return (
                <div style={{ minHeight: '100px' }} className="ui tag carousel raised segment">
                    <Loading />
                </div>
            );
        }

        for(var i=0; i<tags.length; i++) {
            tagCards.push(<Tag key={i} name={tags[i].name} />)
        }
        
        return (
            <div className="ui tag carousel raised segment">
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