import React, { Component } from 'react';
import ProjectImage from '../../../../images/economia.jpeg';
import TagLabelList from 'components/TagLabelList/index.js';

const tags = [{id:1, name:"Economía"}, {id:2, name:"JEP"}];

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
                                <p>Whatever</p>
                            </div>
                            <TagLabelList tags={tags} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}