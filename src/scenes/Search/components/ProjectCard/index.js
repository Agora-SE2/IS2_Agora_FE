import React, { Component } from 'react';
import ProjectImage from '../../../../images/economia.jpeg';

export default class ProjectCard extends Component {
    render() {
        const {project} = this.props;

        return (
            <div className="ui project segment">
                <div className="ui items">
                    <div className="item">
                        <div className="image">
                            <img alt="default project" src={ProjectImage}/>
                        </div>
                        <div className="content">
                            <a href={"/proyectoley/" + project.id} className="header">{project.name}</a>
                            <hr/>
                            <div className="description">
                                {project.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}