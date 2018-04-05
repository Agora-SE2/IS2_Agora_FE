import React, { Component } from 'react';

import { Divider, Statistic } from 'semantic-ui-react';

import ImgProyectoLey from 'images/economia.jpeg'

import TagLabel from 'components/TagLabel/index.js';
import ApprovalBar from 'components/ApprovalBar/index.js';
import CommentList from 'components/CommentList/index.js';

import './styles.css';

export default class LawProject extends Component {
    constructor() {
        super();

        this.state = {
            project: {},
            tags: []
        };
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(project => {
            this.setState({project:project});
            
            fetch(process.env.REACT_APP_BACK_URL + "project_tags.json")
            .then(response => response.json())
            .then(dataTags => this.setState({ tags: dataTags }));
        });
    }

    render() {
        const {project, tags} = this.state;
        console.log(tags);

        let title = "";
        let desc = "";
        let yes = 0
        let no = 0;

        if(project) {
            title = project.name;
            desc = project.description;
            yes = project.yes_votes;
            no = project.not_votes;
        }
        const tagViews = tags.map(tag => {console.log(tag); return (
            <TagLabel key={tag.id.toString()} id={tag.id} />
        )});
        
        return (
            <div className="ui page container"> 
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

                <ApprovalBar yes={yes} no={no}/>

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
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <CommentList />
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <CommentList />
                        </div>                        
                    </div>
                </div>
            </div>
            
        );
    }
}