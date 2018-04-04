import React, { Component } from 'react';

import Tag from '../Tag/index.js'

export default class TagCarousel extends Component {
    constructor() {
        super();

        this.state = {
            tags: [
                {name: "Corrupción"},
                {name: "Elecciones"},
                {name: "Economía"},
                {name: "Educación"},
                {name: "Fuerza pública"},
                {name: "JEP"}
            ]
        };
    }

    componentWillMount() {
        fetch("https://agora-se.herokuapp.com/tags")
        .then(response => {
            var json = response.json();
            console.log(json);
            return json
        })
        .then(jsondata => console.log(jsondata));
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
                    {tagCards}
                </div>
            </div>
        );
    }
}