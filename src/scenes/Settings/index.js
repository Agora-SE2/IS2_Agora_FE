import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        token: store.token
    };
})
export default class Settings extends Component {
    render() {
        if(this.props.token === 0)
            return <Redirect to="/" />
            
        return (
            <div className="ui page container">
                <div className="ui grid">
                    <div className="four wide column">
                        <h1 className="ui header">Configuración</h1>
                    </div>
                    <div className="twelve wide column">
                        <h1>Opciones de configuración</h1>

                        <div className="ui segment">
                            <h3>Notificaciones</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}