import React, { Component } from 'react';
import { connect } from 'react-redux';

import MostUpvotedChart from './components/MostUpvotedChart';
import MostDownvotedChart from './components/MostDownvotedChart';

@connect((store) => {
    console.log(store.currentUser);
    return {
        username: store.currentUser.userName
    };
})
export default class HomeAdmin extends Component {
    render() {
        return (
            <div className="ui page container">
                <div className="ui icon warning message">
                    <i className="inbox icon"></i>
                    <div className="content">
                        <div className="header">
                        Verifica la bandeja de mensajes!
                        </div>
                        <p>Hay comentarios en la página que necesitan revisión. Para acceder a ellos, 
                            haz clic <a href="/reports">aquí.</a>
                        </p>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <div className="ui padded segment">
                            <h2 className="ui centered header">Proyectos mejor votados</h2>
                            <MostUpvotedChart rotated={true}/>
                        </div>                        
                    </div>
                    <div className="eight wide column">
                        <div className="ui padded segment">
                            <h2 className="ui centered header">Proyectos peor votados</h2>
                            {/* <C3Chart axis={{
                                x: {
                                    type: 'category',
                                    categories: ['cat1', 'cat2', 'cat3', 'cat4'],
                                }, 
                                rotated: true
                            }} data={{
                                columns: [
                                    ['Votos a favor', 50, 20, 10, 25],
                                    ['Votos en contra', 200, 300, 100, 250],
                                ],
                                type: 'bar'
                            }} /> */}
                            <MostDownvotedChart rotated={true}/>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}