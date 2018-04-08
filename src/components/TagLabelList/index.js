import React, { Component } from 'react';

import TagLabel from './components/TagLabel/index.js';

export default class TagLabelList extends Component {
    render() {
        const {tags} = this.props;

        let tagViews = [];
        if(tags.length > 0)
            tagViews = tags.map(tag => {console.log(tag); return (
                <TagLabel key={tag.id.toString()} id={tag.id} className="myTag"/>
            )});

        return (
            <div className="tag list">
                {tagViews}
            </div>
        );
    }
}