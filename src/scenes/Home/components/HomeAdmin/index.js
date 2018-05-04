import React, { Component } from 'react';
import { connect } from 'react-redux';

import MostUpvotedChart from './components/MostUpvotedChart';
import MostDownvotedChart from './components/MostDownvotedChart';
import MostCommentedChart from './components/MostCommentedChart';
import TwitterContainer from 'components/TwitterContainer';

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
            <TwitterContainer />
                
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
                            <MostDownvotedChart rotated={true}/>
                        </div>                        
                    </div>
                </div>
                <div className="ui padded segment">
                    <h2 className="ui centered header">Proyectos más debatidos</h2>
                    <MostCommentedChart rotated={false} />
                </div>
            </div>
        );
    }
}