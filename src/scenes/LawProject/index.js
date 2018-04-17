import React, { Component } from 'react';

import { Divider } from 'semantic-ui-react';

import ImgProyectoLey from 'images/economia.jpeg'

import ApprovalStat from './components/ApprovalStat';
import CommentTextArea from './components/CommentTextArea';

import TagLabelList from 'components/TagLabelList';
import ApprovalBar from 'components/ApprovalBar';
import CommentList from 'components/CommentList';

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

        let id = 0;
        let title = "";
        let desc = "";
        let yes = 0
        let no = 0;

        if(project) {
            id = project.id;
            title = project.name;
            desc = project.description;
            yes = project.yes_votes;
            no = project.not_votes;
        }
        
        return (
            <div className="ui page container"> 
                <div className="blankSpace"></div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <h1 className="ui header">
                            {title}
                            <div className="sub header">PROYECTO DE LEY</div>
                        </h1>
                        <ApprovalBar yes={yes} no={no}/>
                        <p>{desc}</p>                    
                        <TagLabelList tags={tags}/>
                    </div>
                    <div className="eight wide column">
                        <img src={ ImgProyectoLey } alt="Descripción estándar de la imagen" width="100%"/>                
                    </div>
                </div>

                <Divider />

                <div className="ui agora segment">
                    <h2 className="ui centered header">
                        ¿Estás a favor o en contra de este proyecto?
                        <div className="sub header">Déjanos aquí tu opinión.</div>
                    </h2>
                    <CommentTextArea projectId={id} yes={yes} no={no} />
                </div>              

                <ApprovalStat yes={yes} no={no}/>

                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <CommentList projectId={id}/>
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <CommentList projectId={id} />
                        </div>                        
                    </div>
                </div>

            </div>
            
        );
    }
}