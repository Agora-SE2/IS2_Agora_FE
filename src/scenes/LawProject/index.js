import React, { Component } from 'react';

import { Divider, Statistic } from 'semantic-ui-react';

import ImgProyectoLey from 'images/economia.jpeg'

import TagLabel from 'components/TagLabel/index.js';

import ApprovalBar from 'components/ApprovalBar/index.js';
import Comments from 'components/Comments/index.js';

import './styles.css';

export default class LawProject extends Component {
    constructor() {
        super();

        this.state = {
            project: {}
        };
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(project => this.setState({project:project}));
    }

    render() {
        const {project} = this.state;

        var title, desc, yes, no;
        if(project) {
            console.log(project);
            title = project.name;
            desc = project.description;
            yes = project.yes_votes;
            no = project.not_votes;
        } else {
            desc = "";
            title = "";
            yes = 0;
            no = 0;
        }

        const tags = [{id:1, name:"Economía"}, {id:2, name:"JEP"}];
        let tagViews = [];
        for(const tag of tags) {
            tagViews.push(<TagLabel key={tag.id.toString()} id={tag.id} name={tag.name} />);
        }
        
        return (
            <div className="ui page container" id="proyectoley"> 
                <div className="blankSpace"></div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <h1 className="ui header">
                            {title}
                            <div className="sub header">PROYECTO DE LEY</div>
                        </h1>
                        <p>{desc}</p>                    
                        <div className="tags">
                            {tagViews}
                        </div>
                    </div>
                    <div className="eight wide column">
                        <img src={ ImgProyectoLey } alt="Descripción estándar de la imagen" width="100%"/>                
                    </div>
                </div>

                <Divider />

                <ApprovalBar />

                <div className="approval stat">
                    <Statistic.Group>
                        <Statistic>
                            <Statistic.Value>{yes}</Statistic.Value>
                            <Statistic.Label>Votos a favor</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>{no}</Statistic.Value>
                            <Statistic.Label>Votos en contra</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </div>

                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <Comments title="Argumentos a favor"/>
                    </div>
                    <div className="eight wide column">
                        <Comments title="Argumentos en contra"/>
                    </div>
                </div>
            </div>
            
        );
    }
}