import React, { Component } from 'react';
import TagLabelList from 'components/TagLabelList';

export default class ProjectCard extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="ui project basic segment">
                <div className="ui divided items">
                    <div className="item">
                        <div className="content">
                            <a href={"/proyectoley/" + project.id} className="header">{project.name+'\t'}</a>
                            <p>creado el {project.publication_date} por {project.speaker}</p>
                            <div className="ui divider"></div>
                            <div className="description">
                                {project.description}
                            </div>
                            <br/>
                            <TagLabelList tags={project.tags} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}