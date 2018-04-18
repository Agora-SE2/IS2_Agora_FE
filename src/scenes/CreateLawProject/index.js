import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

import WarningFormLabel from 'components/WarningFormLabel';

export default class CreateLawProject extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            tags: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value });
    }

    handleTagChange(event) {
        const value = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("submitting...");
    }


    render() {
        return (
            <div className="ui page container">
                <h1 className="ui centered header">Agregar un proyecto de ley</h1>
                
                <div className="ui padded segment">
                    <div className="ui grid">
                        <div className="eleven wide column">
                            <Form onSubmit={this.handleSubmit}>
                                <h5 className="ui header">Nombre del proyecto</h5>
                                <Form.Field>
                                    <input name="name" placeholder="Nombre del proyecto de ley" type="text" onChange={this.handleInputChange} />
                                    <WarningFormLabel 
                                        allowed={false} 
                                        message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                                </Form.Field>

                                <h5 className="ui header">¿A qué categorías pertenece el proyecto?</h5>
                                <Form.Field>
                                    <input name="tags" placeholder="Añade una categoría..." type="text" onChange={this.handleChange} />
                                    <WarningFormLabel 
                                        allowed={false} 
                                        message={"Nombre de usuario inválido. Sólo caracteres alfanuméricos (a-z, 0-9)"} />
                                </Form.Field>
                                <Form.Button fluid color="green">Agregar proyecto</Form.Button>
                            </Form>
                        </div>

                        <div className="five wide column">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}