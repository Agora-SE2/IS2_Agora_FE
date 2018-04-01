import React, { Component } from 'react';

export default class NewsMosaic extends Component {
    render() {
        return(
            <div className="ui news fluid card">
                <img class="ui avatar image" src="../../images/avatar.jpg" alt=""/>
                <span>Username</span>
                <div className="content">
                    <a className="header" href={"/proyectoley/" + this.props.newsId}>{ this.props.title }</a>
                    <div className="meta">
                        <a>{ this.props.description }</a>
                    </div>
                </div>
                            {/* <div class="ui green bottom attached button">
                                <i class="add icon"></i>
                                Votar
                            </div> */}
            </div>
        );
    }
}