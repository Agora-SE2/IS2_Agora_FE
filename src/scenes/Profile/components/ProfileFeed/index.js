import React, { Component } from 'react';

import ProfileEvent from './components/ProfileEvent/index.js';

export default class ProfileFeed extends Component {
    render() {
        return (
            <div className="ui segment">
                <div className="ui feed">
                    <ProfileEvent />
                    <ProfileEvent />
                    <ProfileEvent />
                </div>
            </div>
        );
    }
}