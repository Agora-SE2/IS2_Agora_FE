import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Divider, Message } from 'semantic-ui-react';

import ImgProyectoLey from 'images/economia.jpeg'

import ApprovalStat from './components/ApprovalStat';
import CommentTextArea from './components/CommentTextArea';
import CommentListContainer from './components/CommentListContainer';

import TagLabelList from 'components/TagLabelList';
import ApprovalBar from 'components/ApprovalBar';

import './styles.css';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    };
})
export default class LawProject extends Component {
    constructor() {
        super();

        this.state = {
            project: {},
            tags: [],
        };
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(project => {
            this.setState({project:project});
            fetch(process.env.REACT_APP_BACK_URL + "project_tags.json?law_project=" + id)
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

            if(title)
                document.title = title + " | Ágora";
        }

        let commentView;
        if(this.props.loggedIn) {
            commentView = (
            <div className="ui agora segment">
                <h2 className="ui centered header">
                    ¿Estás a favor o en contra de este proyecto?
                    <div className="sub header">Déjanos aquí tu opinión.</div>
                </h2>
                <CommentTextArea projectId={id} yes={yes} no={no} />
            </div>);
        } else {
            commentView = (
            
            <Message>
                <Message.Header>¿Quieres votar y opinar?</Message.Header>
                <p>Participa en la comunidad de Ágora <a href="/login">iniciando sesión</a> o, si aún 
                no tienes una cuenta, <a href="/signup">registrándote</a>.</p>
            </Message>
            );
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
                        <p>{desc}</p>                    
                        <TagLabelList tags={tags}/>

                        <a href={"/proyectoley/" + id + "/pdf"}>
                        <button className="ui red basic compact labeled icon button">
                            <i className="file pdf icon"></i>
                            Formato PDF
                        </button>
                        </a>

                    </div>
                    <div className="eight wide column">
                        <img src={ ImgProyectoLey } alt="Descripción estándar de la imagen" width="100%"/>                
                    </div>
                </div>

                <Divider />
                <ApprovalBar yes={yes} no={no}/>
                <ApprovalStat yes={yes} no={no}/>

                {commentView}

                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <CommentListContainer id={this.props.match.params.id} pro={true} />
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <CommentListContainer id={this.props.match.params.id} pro={false} />
                        </div>                        
                    </div>
                </div>

            </div>
            
        );
    }
}