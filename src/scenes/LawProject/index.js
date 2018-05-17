import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Divider } from 'semantic-ui-react';

import ApprovalStat from './components/ApprovalStat';
import AuthCommentTextArea from './components/AuthCommentTextArea';

import CommentList from 'components/CommentList';
import Image from 'components/Image';
import TagLabelList from 'components/TagLabelList';
import ApprovalBar from 'components/ApprovalBar';

import './styles.css';

@connect((store) => {
    console.log(store.currentUser);
    return {
        isAdmin: store.currentUser.isAdmin,
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
            // console.log(data);
            this.setState({project:data});
        });
    }

    render() {
        const {id, name, yes_votes, description, not_votes, tags, image, publication_date, opinions} = this.state.project;
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
        
        return (
            <div className="ui page container"> 
                <div className="blankSpace"></div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <h1 className="ui dividing header">
                            {name}
                            <div className="sub header">PROYECTO DE LEY</div>
                        </h1>
                        <TagLabelList tags={tags}/>
                        <p>creado el <b>{publication_date}</b></p>
                        <br/>
                        <p>{description}</p>                    

                        <a href={"/proyectoley/" + id + "/pdf"}>
                            <button className="ui red basic compact labeled icon button">
                                <i className="file pdf icon"></i>
                                Formato PDF
                            </button>
                        </a>
                        {(() => {
                            if(this.props.isAdmin)
                                return (<a href={"/proyectoley/" + id + "/edit"}><button className="ui blue basic compact labeled icon button">
                                        <i className="edit icon"></i>
                                        Editar proyecto de ley
                                    </button>
                                    </a>);
                            else return '';
                        })()}

                    </div>
                    <div className="eight wide column">
                        {(() => {
                            if(image)
                                return <Image src={image.image.url} alt="alalla" />;
                            else return '';
                        })()}
                    </div>
                </div>

                <Divider />
                <ApprovalBar yes={yes_votes} no={not_votes}/>
                
                <ApprovalStat yes={yes_votes} no={not_votes}/>
                <AuthCommentTextArea loggedIn={this.props.loggedIn} id={id} yes_votes={yes_votes} not_votes={not_votes} />

                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <div className="ui attached padded segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <div className="ui divider"></div>
                            <CommentList comments={yesComments} />
                        </div>
                        <div className="ui bottom attached green segment">
                            <center><a style={{ color: '#44AF69' }} href={id + "/args"}>Ver más argumentos a favor</a></center>
                        </div>          
                    </div>
                    <div className="eight wide column">
                        <div className="ui attached padded segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <div className="ui divider"></div>
                            <CommentList comments={notComments} />
                        </div>
                        <div className="ui bottom attached red segment">
                            <center><a style={{ color: '#d73a31' }} href={id + "/args"}>Ver más argumentos en contra</a></center>
                        </div>             
                    </div>
                </div>

            </div>
            
        );
    }
}