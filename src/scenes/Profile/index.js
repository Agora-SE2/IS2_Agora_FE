import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Humberto from 'images/humberto.jpg';

import FeaturedComment from 'components/FeaturedComment/index.js';
import ProfilePic from './components/ProfilePic/index.js';
import ProfileFeed from './components/ProfileFeed/index.js';

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            profile: {}
        }
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        fetch(process.env.REACT_APP_BACK_URL + "users/" + id + ".json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ profile: data.user });
        })
    }

    render() {
        const { birth_name, user_name } = this.state.profile;
        return (
            <div className="ui page container">
                <ProfilePic src={Humberto} />
                <Header textAlign="center" as="h1">
                    {birth_name ? ' ' + birth_name : '@' + user_name}
                    <Header.Subheader>{'@' + user_name}</Header.Subheader>
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