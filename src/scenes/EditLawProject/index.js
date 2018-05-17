import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TagLabelList from 'components/TagLabelList';
import WarningFormLabel from 'components/WarningFormLabel';

import './styles.css';

@connect((store) => {
    return {
        isAdmin: store.currentUser.isAdmin,
        loggedIn: store.loggedIn
    };
})
export default class EditLawProject extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            validName: false,
            description: '',
            publication_date: {},
            image: {},
            imagePreviewUrl: '',
            tag: {},
            validTagList: false,
            submit: false,
            done: false,
            tagList: [],
            project: {},
            goBack: false,
        }

        this.addTag = this.addTag.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.simulateInputClick = this.simulateInputClick.bind(this);
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        
        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(project => {
            // console.log(data);
            this.setState({
                name: project.name,
                description: project.description,
                publication_date: project.publication_date
                // TODO: tags, date, image                
            });
        });
    }

    addTag() {
        this.setState(prevState => ({
            tagList: prevState.tagList.concat([prevState.tag])
        }));
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

        const {name, description, publication_date, image} = this.state;
        const {id} = this.props.match.params;

        this.setState({
            submit: true
        });

        const data = {
            name,
            description,
            publication_date,
        };

        console.log(JSON.stringify(data));

        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response);
            if(response.status !== 200) {
                return { error: true, status: response.status }
            }
            return response.json();
        }).then(data => {
            console.log("data", data);
            if(!data.error)
                window.location.replace('/proyectoley/' + data.id);
            else 
                console.error(data.status);
        });
    }

    simulateInputClick() {
        this.inputFile.click();
    }

    cancelEdit = () => this.setState({goBack: true});

    render() {
        const {imagePreviewUrl, submit, name, description, tagList, publication_date, goBack} = this.state;
        const {loggedIn, isAdmin} = this.props;

        if(loggedIn && !isAdmin)    // FIXME:
            return <Redirect to="/" />

        if(goBack)
            return <Redirect to={"/proyectoley/" + this.props.match.params.id} />

        let imagePreview;
        if(imagePreviewUrl.length === 0)
            imagePreview = '';
        else
            imagePreview = <img id="imagePreview" src={imagePreviewUrl} alt="upload preview" />;
        
        document.title = "Editar proyecto de ley | Ágora";

        return (
            <div className="ui page container">
                <h1 className="ui centered header">Editar un proyecto de ley</h1>
                
                <div className="ui padded segment">
                    <form ref={el => (this.form = el)} className="ui form">
                    <div className="ui grid">
                        <div className="eleven wide column">
                            <h5 className="ui header">Nombre del proyecto</h5>
                            <Form.Field>
                                <input name="name" placeholder="Nombre del proyecto de ley" type="text" value={name} onChange={this.handleInputChange} />
                                <WarningFormLabel 
                                    allowed={submit && name.length === 0} 
                                    message={"Por favor ingrese un nombre."} />
                            </Form.Field>
                            
                            <h5 className="ui header">Descripción general</h5>
                            <Form.Field>
                                <textarea name="description" placeholder="Describa en términos generales en qué consiste el proyecto" type="text" value={description} onChange={this.handleInputChange} />
                                <WarningFormLabel 
                                    allowed={false} 
                                    message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                            </Form.Field>

                            <h5 className="ui header">¿En qué fecha se propuso este proyecto de ley en el Congreso?</h5>
                            <Form.Field>
                                <input value={publication_date} name="publication_date" placeholder="¿Cuándo fue publicado este proyecto de ley?" type="date" onChange={this.handleInputChange} />
                                <WarningFormLabel 
                                    allowed={submit && name.length === 0} 
                                    message={"Por favor ingrese un nombre."} />
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

                            <Form.Button onClick={this.handleSubmit} color="red">Guardar cambios</Form.Button>
                            <Form.Button onClick={this.cancelEdit}>Cancelar</Form.Button>
                        </div>

                        <div className="five wide column">
                            {imagePreview}
                            <div 
                                style={{marginTop: '30px'}} 
                                className="ui fluid labeled icon black button"
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