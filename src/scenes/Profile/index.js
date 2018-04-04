import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Humberto from 'images/humberto.jpg';

import FeaturedComment from 'components/FeaturedComment/index.js';
import ProfilePic from './components/ProfilePic/index.js';
import ProfileFeed from './components/ProfileFeed/index.js';

export default class Profile extends Component {
    render() {
        return (
            <div className="ui page container">
                <ProfilePic src={Humberto} />
                <Header textAlign="center" as="h1">
                    {' '}Humberto de la Calle
                    <Header.Subheader>@humberticolindo</Header.Subheader>
                </Header>

                <div className="ui grid">
                    <div className="ten wide column">
                        <ProfileFeed title="Comentarios" />
                    </div>
                    <div className="six wide column">
                        <FeaturedComment />
                    </div>
                </div>
            </div>
        );
    }
}