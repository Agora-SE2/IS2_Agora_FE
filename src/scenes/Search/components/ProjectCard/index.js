import React, { Component } from 'react';
import ProjectImage from '../../../../images/economia.jpeg';
import TagLabelList from 'components/TagLabelList/index.js';

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="ui project segment">
                <div className="ui items">
                    <div className="item">
                        <div className="image">
                            <img src={ProjectImage}/>
                        </div>
                        <div className="content">
                            <a className="header">Proyecto #1</a>
                            <hr/>
                            <div className="description">
                            </div>
                            <TagLabelList tags={this.props.tags} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}