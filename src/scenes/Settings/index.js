import React, { Component} from 'react';
import Humberto from 'images/humberto.jpg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfilePic from 'components/ProfilePic';
import './styles.css';

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
                <h3 className="ui header">Datos generales</h3>
                <div className="indented">
                    <table className="ui very basic selectable table">
                        <tbody>
                            <tr>
                            <td className="collapsing">
                                <b>Nombre de pila</b>
                            </td>
                            <td>José David Nieto Vitola</td>
                            <td className="collapsing">
                                <a><i className="edit icon"></i>Editar</a>
                            </td>
                            </tr>

                            <tr>
                            <td className="collapsing">
                                <b>Nombre de usuario</b>
                            </td>
                            <td>@jdnietov</td>
                            <td className="collapsing">
                                <a><i className="edit icon"></i>Editar</a>
                            </td>
                            </tr>

                            <tr>
                            <td className="collapsing">
                                <b>Correo electrónico</b>
                            </td>
                            <td>jdnv.123@gmail.com</td>
                            <td className="collapsing">
                                <a><i className="edit icon"></i>Editar</a>
                            </td>
                            </tr>

                            <tr>
                            <td className="collapsing">
                                <b>Contraseña</b>
                            </td>
                            <td>●●●●●●●●●●</td>
                            <td className="collapsing">
                                <a><i className="edit icon"></i>Editar</a>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="ui red dividing header">
                    Eliminar tu cuenta
                </h3>
                <div className="indented">
                    <div className="ui error message">
                        <div className="header">¡Cuidado!</div>
                        <p>Eliminar tu cuenta es un proceso irreversible. Todos tus datos se borrarán. ¡Piensa en todo lo que hemos pasado juntos!</p>
                    </div>
                    <div className="ui right floated red button">Eliminar cuenta</div>
                </div>
            </div>
        )
    }
}