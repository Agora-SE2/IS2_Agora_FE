import React, { Component } from 'react';
import ProjectImage from '../../../../images/economia.jpeg';
import TagLabel from 'components/TagLabel/index.js';

const tags = [{id:1, name:"Economía"}, {id:2, name:"JEP"}];
        let tagViews = [];
        for(const tag of tags) {
            tagViews.push(<TagLabel key={tag.id.toString()} id={tag.id} name={tag.name} />);
        }

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
                            <div className="tags">
                                {tagViews}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}