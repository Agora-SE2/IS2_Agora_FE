import React, { Component } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import WarningFormLabel from 'components/WarningFormLabel';

import './styles.css';

@connect((store) => {
    return {
        isAdmin: store.currentUser.isAdmin,
        loggedIn: store.loggedIn
    };
})
export default class CreateLawProject extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: '',
            publication_date: {},
            // image: {},
            // imagePreviewUrl: '',
            speaker: '',
            submit: false,
            done: false,
            tags: {},
            tagOptions: [],

            validName: false,
            validTagList: false,
        }

        this.changeTags = this.changeTags.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.simulateInputClick = this.simulateInputClick.bind(this);
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "tags.json?page=1")
        .then(response => response.json())
        .then(data => {
            let tagOptions = [];
            data.forEach((tag, index) => {
                tagOptions.push({key: index, value: tag.name, text: tag.name});
            })
            this.setState({ tagOptions });
        });
    }

    changeTags = (event, { value }) => this.setState({ tagList: value });

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

        const {name, description, publication_date, speaker} = this.state;

        this.setState({
            submit: true
        });

        const lawProject = {
            name,
            description,
            publication_date,   // TODO: este valor debe estar tambien en el form
            // image: image,
            yes_votes: 0,
            not_votes: 0,   // TODO: delete yes_Votes and no_votes
            state: 1,
            speaker
        };

        // var lawProject  = new FormData();
        // for(var key in data) {
        //     lawProject.append(key, data[key]);
        // }
        // for (var pair of lawProject.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        fetch(process.env.REACT_APP_BACK_URL + "law_projects.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lawProject)
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            if(data.id)
                window.location.replace('/proyectoley/' + data.id);
        });
    }

    simulateInputClick() {
        this.inputFile.click();
    }

    render() {
        const { submit, name, tagOptions} = this.state;
        const {loggedIn, isAdmin} = this.props;

        if(loggedIn && !isAdmin)    // FIXME:
            return <Redirect to="/" />

        // let imagePreview;
        // if(imagePreviewUrl.length === 0)
        //     imagePreview = '';
        // else
        //     imagePreview = <img id="imagePreview" src={imagePreviewUrl} alt="upload preview" />;
        
        document.title = "Crear proyecto de ley | Ágora";

        return (
            <div className="ui page container">
                <h1 className="ui centered header">Agregar un proyecto de ley</h1>
                
                <div id="createProjectForm" className="ui padded basic segment">
                    <form ref={el => (this.form = el)} className="ui form">
                    <h5 className="ui header">Nombre del proyecto</h5>
                    <Form.Field>
                        <input name="name" placeholder="Nombre del proyecto de ley" type="text" onChange={this.handleInputChange} />
                        <WarningFormLabel 
                            allowed={submit && name.length === 0} 
                            message={"Por favor ingrese un nombre."} />
                    </Form.Field>

                    <h5 className="ui header">Nombre de los/las ponentes</h5>
                    <Form.Field>
                        <input name="speaker" placeholder="Ponentes del proyecto de ley" type="text" onChange={this.handleInputChange} />
                        <WarningFormLabel 
                            allowed={submit && name.length === 0} 
                            message={"Por favor ingrese un ponente."} />
                    </Form.Field>
                    
                    <h5 className="ui header">Descripción general</h5>
                    <Form.Field>
                        <textarea name="description" placeholder="Describa en términos generales en qué consiste el proyecto" type="text" onChange={this.handleInputChange} />
                        <WarningFormLabel 
                            allowed={false} 
                            message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                    </Form.Field>

                    <h5 className="ui header">¿En qué fecha se propuso este proyecto de ley en el Congreso?</h5>
                    <Form.Field>
                        <input name="publication_date" placeholder="¿Cuándo fue publicado este proyecto de ley?" type="date" onChange={this.handleInputChange} />
                        <WarningFormLabel 
                            allowed={submit && name.length === 0} 
                            message={"Por favor ingrese un nombre."} />
                    </Form.Field>

                    <h5 className="ui header">¿A qué categorías pertenece el proyecto?</h5>
                    <Dropdown placeholder='Selecciona categorías para este proyecto' fluid multiple search selection onChange={this.changeTags} options={tagOptions} />
                    <br/>
                    <Form.Button onClick={this.handleSubmit} fluid color="black">Agregar proyecto</Form.Button>

                    {/* {imagePreview}
                    <div 
                        style={{marginTop: '30px'}} 
                        className="ui fluid labeled icon red button"
                        onClick={this.simulateInputClick}>
                        <i className="image icon"></i>
                        Añade una imagen
                    </div>
                    <input ref={(node) => this.inputFile = node}type='file' id="imgInp" onChange={this.handleImageChange}/> */}
                    </form>
                </div>
            </div>
        );
    }
}