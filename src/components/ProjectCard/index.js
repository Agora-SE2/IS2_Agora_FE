import React, { Component } from 'react';

import TagLabelList from '../TagLabelList';
import './styles.css';

export default class ProjectCard extends Component {
    constructor() {
        super();

        this.goToProject = this.goToProject.bind(this);
    }

    goToProject() {
        window.location.replace('/proyectoley/' + this.props.news.id);
    }

    render() {
        const {news} = this.props;
        console.log(news);

        if(news) {
            return (
                <div onClick={this.goToProject} className="ui news fluid card">
                    <div className="content">
                        <a className="ui dividing header" href={"/proyectoley/" + news.id}>{ news.name }</a>
                        <TagLabelList tags={news ? news.tags : []} />
                        <div className="meta">
                        <a>{ news.description }</a>
                        </div>
                    </div>
                </div>
            );
        } else
            return (
                <div>Loading...</div>
            );
    }
}