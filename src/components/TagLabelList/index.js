import React, { Component } from 'react';

import TagLabel from './components/TagLabel/index.js';

export default class TagLabelList extends Component {
    render() {
        const {tags} = this.props;

        let tagViews = [];
        if(tags && tags.length > 0)
            tagViews = tags.map((tag, index) => {console.log(tag); return (
                <TagLabel key={index} tag={tag} className="myTag"/>
            )});

        return (
            <div style={{marginBottom: '10px'}} className="tag list">
                {tagViews}
            </div>
        );
    }
}