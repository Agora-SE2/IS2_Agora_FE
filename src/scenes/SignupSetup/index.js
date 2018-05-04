import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

@connect((store) => {
    console.log(store.currentUser);
    return {
        id: store.currentUser.id
    };
})
export default class SignupSetup extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                birthName: '',
                description: ''
            },
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.simulateInputClick = this.simulateInputClick.bind(this);
    }

    componentWillMount() {
        // fetch(process.env.REACT_APP_BACK_URL + "tags.json")
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     this.setState({ tags: data });
        // })
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value,
            },
            done: false
        }));
    }

    handleSubmit(event, data) {
        event.preventDefault();
        let wrapper = {
            user: this.state.user
        }

        fetch(process.env.REACT_APP_BACK_URL + "users/" + this.props.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wrapper)
        })
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                this.setState({done: true})
            }
        })
    }
    
    simulateInputClick() {
        this.inputFile.click();
    }

    render() {
        if(this.state.done)
            return <Redirect to='/' />

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
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Form.Input onChange={this.handleInputChange} name="birth_name" fluid label="Tu nombre de pila" placeholder="Tu nombre de pila..." />
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea onChange={this.handleInputChange} name="description" label="Una breve descripción de ti" placeholder="Háblanos de ti. Estamos aquí para apoyarte." />
                            </Form.Field>
                            <Form.Field>
                                <label>¿Qué temas te interesan?</label>
                                {(() => {
                                    {/* return this.state.tags.map((tag) => <Form.Checkbox key={tag.id} label={tag.name} /> ) */}
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