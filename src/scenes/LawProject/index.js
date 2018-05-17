import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'components/Loading';
import { Button, Icon, Divider } from 'semantic-ui-react';

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
                    <div className="nine wide column">
                        <div className="ui grid">
                            <div className="thirteen wide column">
                                <h1 className="ui header">
                                    {name}
                                    <div className="sub header">PROYECTO DE LEY - {publication_date}</div>
                                </h1>
                            </div>
                            <div className="three wide column">                         
                            <a href={"/proyectoley/" + id + "/pdf"}><Icon id="pdfIcon" size="big" color="red" name="file pdf" /></a>
                            </div>
                        </div>
                        {(() => {
                            if(this.props.isAdmin)
                                return (<a href={"/proyectoley/" + id + "/edit"}><button style={{marginTop: '20px'}}className="ui basic labeled icon fluid button">
                                        <i className="edit icon"></i>
                                        Editar proyecto de ley
                                    </button>
                                    </a>);
                            else return '';
                        })()}
                        <div className="ui divider"></div>
                        <TagLabelList tags={tags}/> 

                        <h3 className="ui header">Descripción general</h3>
                        <div className="indented">{description}</div>

                        <h3 className="ui header">Ponentes</h3>
                        <div className="indented">{description}</div>
                    </div>

                    <div className="seven wide column">
                        <ApprovalBar yes={yes_votes} no={not_votes}/>
                        <ApprovalStat yes={yes_votes} no={not_votes}/>

                    </div>
                </div>

                <Divider />
                
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