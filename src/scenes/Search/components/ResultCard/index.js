import React, { Component } from 'react';
import ProjectImage from '../../../../images/economia.jpeg';
import TagLabelList from 'components/TagLabelList';
import { getTagIcon } from 'services/api/agora-helpers';

export default class ProjectCard extends Component {
    render() {
        const {project} = this.props;

        return (
            <div className="ui project basic segment">
                <div className="ui divided items">
                    <div className="item">
                        <div className="content">
                            <a href={"/proyectoley/" + project.id} className="header">{project.name+'\t'}</a>
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