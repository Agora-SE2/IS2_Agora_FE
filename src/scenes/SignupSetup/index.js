import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class SignupSetup extends Component {
    constructor() {
        super();

        this.state = {
            tags: []
        }

        this.simulateInputClick = this.simulateInputClick.bind(this);
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "tags.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ tags: data });
        })
    }

    simulateInputClick() {
        this.inputFile.click();
    }

    render() {
        return (
            <div className="ui page container">
                <div className="ui grid">
                    <div className="six wide column">
                        <h1>So you actually signed up for Ágora?</h1>
                        <p>Talk about buyer's remorse, right?</p>
                        <p>Since you're at it, help us with some data so morgues can identify you 
                            when you get roasted at the debates.</p>
                    </div>
                    <div className="ten wide column">
                        <Form>
                            <Form.Field>
                                <Form.Input fluid label="Tu nombre de pila" placeholder="Tu nombre de pila..." />
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea label="Una breve descripción de ti" placeholder="Háblanos de ti. Estamos aquí para apoyarte." />
                            </Form.Field>
                            <Form.Field>
                                <label>¿Qué temas te interesan?</label>
                                {(() => {
                                    return this.state.tags.map((tag) => <Form.Checkbox key={tag.id} label={tag.name} /> )
                                })()}                             
                            </Form.Field>
                            <center> {/* TODO: */}
                                <input ref={(node) => this.inputFile = node}type='file' id="imgInp" onChange={this.handleImageChange}/>
                                <div 
                                    style={{marginTop: '30px', marginBottom: '15px'}} 
                                    className="ui labeled icon button"
                                    onClick={this.simulateInputClick}>
                                    <i className="image icon"></i>
                                    Añade una imagen
                                </div>
                            </center>
                            <Form.Button color='red' fluid>¡Listo!</Form.Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}