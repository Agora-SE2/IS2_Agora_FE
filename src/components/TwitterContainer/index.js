import React, { Component } from 'react';
import Twitter from 'services/twitter';

export default class TwitterContainer extends Component {
    componentWillMount() {
        var url = new URL("https://api.twitter.com/1.1/search/tweets.json"),
            params = {q:'banana'}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url)
        .then(response => { console.log(response); return response.json() })
        .then(data => { console.log(data) });
    }

    render() {
        return <h3 className="ui header">Twitter container</h3>
    }
}