import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Divider, Message } from 'semantic-ui-react';

import ImgProyectoLey from 'images/economia.jpeg'

import ApprovalStat from './components/ApprovalStat';
import CommentTextArea from './components/CommentTextArea';

import CommentList from 'components/CommentList';
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
        };
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({project:data});  // TODO: sólo con el back de Andrey
            // this.setState({project:data.law_project});
        });
    }

    render() {
        const {id, name, yes_votes, description, not_votes, tags, image, opinions} = this.state.project;
        console.log(image);
        let yesComments = [];
        let notComments = [];
        if(name)
            document.title = name + " | Ágora";
        if(opinions) {
            opinions.forEach((comment) => {
                if(comment.pro)
                    yesComments.push(comment);
                else
                    notComments.push(comment);
                }
            );
        }

        let commentView;
        if(this.props.loggedIn) {
            commentView = (
            <div className="ui agora segment">
                <h2 className="ui centered header">
                    ¿Estás a favor o en contra de este proyecto?
                    <div className="sub header">Déjanos aquí tu opinión.</div>
                </h2>
                <CommentTextArea projectId={id} yes={yes_votes} no={not_votes} />
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
                            {name}
                            <div className="sub header">PROYECTO DE LEY</div>
                        </h1>
                        <p>{description}</p>                    
                        <TagLabelList tags={tags}/>

                        <a href={"/proyectoley/" + id + "/pdf"}>
                        <button className="ui red basic compact labeled icon button">
                            <i className="file pdf icon"></i>
                            Formato PDF
                        </button>
                        </a>

                    </div>
                    <div className="eight wide column">
                        {/* <img src={ image.image.url ? image.image.url : ImgProyectoLey } alt="Descripción estándar de la imagen" width="100%"/>                 */}
                    </div>
                </div>

                <Divider />
                <ApprovalBar yes={yes_votes} no={not_votes}/>
                <ApprovalStat yes={yes_votes} no={not_votes}/>

                {commentView}

                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <CommentList comments={yesComments} />
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <CommentList comments={notComments} />
                        </div>                        
                    </div>
                </div>

            </div>
            
        );
    }
}