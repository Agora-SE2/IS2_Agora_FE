import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TagLabelList from 'components/TagLabelList';
import WarningFormLabel from 'components/WarningFormLabel';

import { toAgoraDate } from 'services/api/agora-helpers.js';

import './styles.css';
// TODO: calendario para seleccionar la fecha de publicacion

@connect((store) => {
    return {
        token: store.token
    };
})
export default class CreateLawProject extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            validName: false,
            desc: '',
            image: {},
            imagePreviewUrl: '',
            tag: {},
            validTagList: false,
            submit: false,
            done: false,
            tagList: []
        }

        this.addTag = this.addTag.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.simulateInputClick = this.simulateInputClick.bind(this);
    }

    addTag() {
        this.setState(prevState => ({
            tagList: prevState.tagList.concat([prevState.tag])
        }));
        console.log(this.state.tagList);
    }

    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = params => {
            console.log(params);
            this.setState({
                image: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
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

        const {name, desc, image} = this.state;

        this.setState({
            submit: true
        });

        const data = {
            name: name,
            description: desc,
            image: document.getElementById('imgInp').files[0],
            publication_date: toAgoraDate(new Date()),   // TODO: este valor debe estar tambien en el form
            yes_votes: 0,
            not_votes: 0,   // TODO: delete yes_Votes and no_votes
        };

        var lawProject  = new FormData();
        for(var key in data) {
            lawProject.append(key, data[key]);
        }

        fetch(process.env.REACT_APP_PDF_URL + "law_projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: lawProject
        }).then(response => {
            console.log(response);
        });
    }

    simulateInputClick() {
        this.inputFile.click();
    }

    render() {
        const {imagePreviewUrl, submit, name, tagList} = this.state;
        const {token} = this.props;

        let imagePreview;
        if(imagePreviewUrl.length === 0)
            imagePreview = '';
        else
            imagePreview = <img id="imagePreview" src={imagePreviewUrl} alt="upload preview" />;
        
        if(token === 0)
            return <Redirect to="/" />

        return (
            <div className="ui page container">
                <h1 className="ui centered header">Agregar un proyecto de ley</h1>
                
                <div className="ui padded segment">
                    <form ref={el => (this.form = el)} className="ui form">
                    <div className="ui grid">
                        <div className="eleven wide column">
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
                        </div>

                        <div className="five wide column">
                            {imagePreview}
                            <div 
                                style={{marginTop: '30px'}} 
                                className="ui fluid labeled icon red button"
                                onClick={this.simulateInputClick}>
                                <i className="image icon"></i>
                                Añade una imagen
                            </div>
                            <input ref={(node) => this.inputFile = node}type='file' id="imgInp" onChange={this.handleImageChange}/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}