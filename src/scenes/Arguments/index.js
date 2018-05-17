import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
import CommentList from '../../components/CommentList';

export default class Arguments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            opinions: [],
            favor: true,
            contra: true,
        };
        
        this.handleConCheckbox = this.handleConCheckbox.bind(this);
        this.handleProCheckbox = this.handleProCheckbox.bind(this);
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(data => {
            this.setState({ project:data, opinions: data.opinions });
        });
    }

    handleConCheckbox = (e, { checked }) => {
        const { opinions, favor, project } = this.state;

        let newOpinions = checked ? 
            project.opinions.filter(opinion => ((favor && opinion.pro) || !opinion.pro)) : 
            opinions.filter(opinion => (favor && opinion.pro));

        this.setState((prevState) => ({
            contra: checked,
            opinions: newOpinions
        }))
    }

    handleProCheckbox = (e, { checked }) => {
        const { opinions, contra, project } = this.state;

        let newOpinions = checked ? 
            project.opinions.filter(opinion => ((contra && !opinion.pro) || opinion.pro)) : 
            opinions.filter(opinion => (contra && !opinion.pro));

        this.setState((prevState) => ({
            favor: checked,
            opinions: newOpinions
        }))
    }

    render() {
        const { opinions, favor, contra } = this.state;
        const { name } = this.state.project;

        document.title = name ? "Discusión sobre " + name + " | Ágora " : "Ágora";

        return (
            <div className="ui page container">
                <div className="ui grid">
                    <div className="twelve wide column">
                        <h1 className="ui dividing header">Discusión para el proyecto de ley "{name}"</h1>
                    </div>
                    <div className="four wide column"></div>
                </div>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <CommentList comments={opinions} />
                    </div>
                    <div className="four wide column">
                        <div className="ui vertical large fluid menu">
                            <div className="item">
                                <div className="header">Comentarios</div>
                                <div className="menu">
                                    <div className="item">
                                        <Checkbox name="favor" defaultChecked={true} onChange={this.handleProCheckbox} label="A favor" />
                                    </div>
                                    <div className="item">
                                        <Checkbox name="contra" defaultChecked={true} onChange={this.handleConCheckbox}label="En contra" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="menu">
                                    <div className="item">
                                        <Checkbox radio label="Más votados" />
                                    </div>
                                    <div className="item">
                                        <Checkbox radio label="Más recientes" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}