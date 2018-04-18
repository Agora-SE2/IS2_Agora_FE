import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import TagLabelList from 'components/TagLabelList';
import WarningFormLabel from 'components/WarningFormLabel';

import { toAgoraDate } from 'services/api/agora-helpers.js';
import { postLawProject } from 'services/api/law-project.js';

// TODO: calendario para seleccionar la fecha de publicacion

export default class CreateLawProject extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            validName: false,
            desc: '',
            tag: {},
            validTagList: false,
            submit: false,
            done: false,
            tagList: []
        }

        this.addTag = this.addTag.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addTag() {
        this.setState(prevState => ({
            tagList: prevState.tagList.concat([prevState.tag])
        }));
        console.log(this.state.tagList);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value });
    }

    handleTagChange(event) {
        const value = event.target.value;
        if(value.trim().length > 0) {
            const tag = {
                name: value,
                id: 1
            }

            this.setState({ tag: tag });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const {name, desc} = this.state;
        this.setState({
            submit: true
        });

        const lawProject = {
            law_project: {
                name: name,
                description: desc,
                publication_date: toAgoraDate(new Date()),   // TODO: este valor debe estar tambien en el form
                yes_votes: 0,
                not_votes: 0,
            }
        };

        console.log(JSON.stringify(lawProject));

        postLawProject(lawProject).then(response => {
            console.log(response);
            return response.json()
        }).then(data => {
            console.log(data);
        });

    }


    render() {
        const {submit, name, tagList} = this.state;

        return (
            <div className="ui page container">
                <h1 className="ui centered header">Agregar un proyecto de ley</h1>
                
                <div className="ui padded segment">
                    <div className="ui grid">
                        <div className="eleven wide column">
                            <Form>
                                <h5 className="ui header">Nombre del proyecto</h5>
                                <Form.Field>
                                    <input name="name" placeholder="Nombre del proyecto de ley" type="text" onChange={this.handleInputChange} />
                                    <WarningFormLabel 
                                        allowed={submit && name.length === 0} 
                                        message={"Por favor ingrese un nombre."} />
                                </Form.Field>
                                
                                <h5 className="ui header">Descripción general</h5>
                                <Form.Field>
                                    <textarea name="desc" placeholder="Describa en términos generales en qué consiste el proyecto" type="text" onChange={this.handleInputChange} />
                                    <WarningFormLabel 
                                        allowed={false} 
                                        message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                                </Form.Field>

                                <h5 className="ui header">¿A qué categorías pertenece el proyecto?</h5>
                                <Form.Field>
                                    <div className="ui action input">
                                        <input name="tag" type="text" placeholder="Categorías (ej. economía, congreso...)" onChange={this.handleTagChange} />
                                        <div onClick={this.addTag} className="ui red button">Agregar</div>
                                        <WarningFormLabel 
                                            allowed={false} 
                                            message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                                    </div>
                                </Form.Field>
                                <TagLabelList tags={tagList} />

                                <Form.Button onClick={this.handleSubmit} fluid color="black">Agregar proyecto</Form.Button>
                            </Form>
                        </div>

                        <div className="five wide column">
                            <div className="ui fluid labeled icon red button">
                                <i className="image icon"></i>
                                Añade una imagen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}