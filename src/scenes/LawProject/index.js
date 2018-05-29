import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Divider, Message, TextArea } from 'semantic-ui-react';

import { toAgoraDate } from 'services/api/agora-helpers.js';

import ApprovalStat from './components/ApprovalStat';

import CommentList from 'components/CommentList';
import TagLabelList from 'components/TagLabelList';
import ApprovalBar from 'components/ApprovalBar';

import './styles.css';

@connect((store) => {
    console.log(store.currentUser);
    return {
        userId: store.currentUser.id,
        isAdmin: store.currentUser.isAdmin,
        loggedIn: store.loggedIn
    };
})
export default class LawProject extends Component {
    constructor() {
        super();

        this.state = {
            project: {},
            opinionPro: '',
            opinionCon: ''
        };

        this.comment = this.comment.bind(this);
        this.handleOpinionProChange = this.handleOpinionProChange.bind(this);
        this.handleOpinionConChange = this.handleOpinionConChange.bind(this);
        this.vote = this.vote.bind(this);
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

    comment(e, pro) {
        const content = pro ? this.state.opinionPro : this.state.opinionCon;
        const { id } = this.state.project;

        if(content.length > 0) {
            const opinion = {
                opinion: {
                    content: content,
                    date: toAgoraDate(new Date()),
                    like: 0,
                    pro: pro,
                    user_id: this.props.userId,
                    law_project_id: id
                }
            };

            console.log(opinion);

            fetch(process.env.REACT_APP_BACK_URL + "opinions.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opinion)
            }).then(response => {
                console.log(response);
                if(response.status >= 200 || response.status <= 208) {
                    console.log("success");
                } else {
                    console.error(response.status, "error commenting");
                }
                return response.json()
            }).then(newOpinion => {
                this.setState(prevState => ({
                    project: {
                        ...prevState.project,
                        opinions: [...prevState.project.opinions, newOpinion]
                    }
                }))
            });
        }
    }

    handleOpinionConChange = (e) => this.setState({ opinionCon: e.target.value });

    handleOpinionProChange = (e) => this.setState({ opinionPro: e.target.value });

    vote(e, name, pro) {
        const { yes_votes, not_votes,  id } = this.state.project;

        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                law_project: {
                    [name]: pro ? yes_votes + 1 : not_votes + 1
                }
            })
        })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                console.log("successful vote!");
            } else {
                console.error(response.status, "error updating vote count");
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            this.setState(prevState => ({
                project: {
                    ...prevState.project,
                    [name]: pro ? yes_votes + 1 : not_votes + 1
                }
            }))
        });
    }

    render() {
        const {id, name, yes_votes, description, not_votes, tags, publication_date, opinions, speaker} = this.state.project;

        let yesComments = [];
        let notComments = [];

        if(name)
            document.title = name + " | Ágora";

        if(opinions) {
            yesComments = opinions.filter(opinion => opinion.pro);
            notComments = opinions.filter(opinion => !opinion.pro);
        }

        return (
            <div className="ui page container"> 
                <div className="blankSpace"></div>
                <div className="ui grid">
                    <div className="ten wide column">
                        <div className="ui grid">
                            <div className="thirteen wide column">
                                <h1 className="ui header">
                                    {name}
                                    <div className="sub header">PROYECTO DE LEY - {publication_date}</div>
                                </h1>
                            </div>
                            <div className="three wide column">                         
                            <a><Icon id="bookmarkIcon" size="big" color="yellow" name="bookmark outline" /></a>
                            <a href={"/proyectoley/" + id + "/pdf"}><Icon id="pdfIcon" size="big" color="red" name="file pdf" /></a>
                            </div>
                        </div>
                        {(() => {
                            if(this.props.isAdmin)
                                return (
                                    <a href={"/proyectoley/" + id + "/edit"}>
                                    <button style={{marginTop: '20px'}}className="ui basic labeled icon fluid button">
                                        <i className="edit icon"></i>
                                        Editar proyecto de ley
                                    </button>
                                    </a>);
                            else if(this.props.loggedIn)
                                return (
                                    <Button.Group fluid style={{marginTop: '10px'}}>
                                        <Button id="aFavor" onClick={event => this.vote(event, "yes_votes", true)}>A favor</Button>
                                        <Button.Or />
                                        <Button id="enContra" onClick={event => this.vote(event, "not_votes", false)}>En contra</Button>
                                    </Button.Group>);
                            else return (
                                <Message>
                                    <Message.Header>¿Quieres votar y opinar?</Message.Header>
                                    <p>Participa en la comunidad de Ágora <a href="/login">iniciando sesión</a> o, si aún 
                                    no tienes una cuenta, <a href="/signup">registrándote</a>.</p>
                                </Message>
                            );
                        })()}
                        <div className="ui divider"></div>
                        <TagLabelList tags={tags}/> 

                        <h3 className="ui header">Descripción general</h3>
                        <div className="indented">{description}</div>

                        <h3 className="ui header">Ponentes</h3>
                        <div className="indented">{speaker}</div>
                    </div>

                    <div className="six wide column">
                        <ApprovalBar yes={yes_votes} no={not_votes}/>
                        <ApprovalStat yes={yes_votes} no={not_votes}/>
                    </div>
                </div>
                <br/>
                <br/>
                <Divider />
                <br/>
                
                <div className="ui grid" id="commentary-grid">
                    <div className="eight wide column">
                        <div className="ui attached padded segment">
                            <h2 className="ui centered header">Argumentos a favor</h2>
                            <div className="ui divider"></div>

                            <CommentList comments={yesComments} />

                            <div className="ui form">
                                <TextArea onChange={this.handleOpinionProChange} placeholder='¿Qué opinas sobre este proyecto de ley?' />
                                <Button onClick={(e) => this.comment(e, true)} id="positiveCommentBtn" fluid>Comentar a favor</Button>
                            </div>
                        </div>
                        <div className="ui bottom attached segment" onClick={() => window.location.replace(id + '/args')}>
                            <center><a style={{ color: '#336688' }} href={id + "/args"}>Ver más argumentos a favor</a></center>
                        </div>    
                    </div>
                    <div className="eight wide column">
                        <div className="ui attached padded segment">
                            <h2 className="ui centered header">Argumentos en contra</h2>
                            <div className="ui divider"></div>
                            <CommentList comments={notComments} />

                            <div className="ui form">
                                <TextArea onChange={this.handleOpinionConChange} placeholder='¿Qué opinas sobre este proyecto de ley?' />
                                <Button onClick={(e) => this.comment(e, false)} id="negativeCommentBtn" fluid>Comentar en contra</Button>
                            </div>
                        </div>
                        <div className="ui bottom attached segment" onClick={() => window.location.replace(id + '/args')}>
                            <center><a style={{ color: '#FF9900' }} href={id + "/args"}>Ver más argumentos en contra</a></center>
                        </div>             
                    </div>
                </div>

            </div>
            
        );
    }
}