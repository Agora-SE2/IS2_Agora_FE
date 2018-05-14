import React, { Component } from 'react';
import { Header, Loader } from 'semantic-ui-react';

import Humberto from 'images/humberto.jpg';

import FeaturedComment from 'components/FeaturedComment/index.js';
import ProfilePic from 'components/ProfilePic/index.js';
import ProfileFeed from './components/ProfileFeed/index.js';

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            profile: {},
            loading: false
        }
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        this.setState({loading: true});
        fetch(process.env.REACT_APP_BACK_URL + "users/" + id + ".json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ profile: data, loading: false });
        })
    }

    render() {
        const { profile, loading } = this.state;
        let birth_name = '';
        let user_name = '';
        if(profile) {
            birth_name = profile.birth_name;
            user_name = profile.user_name;
            document.title = "@" + (user_name ? user_name : '') + " | Ágora";
        }
        
        
        return (
            <div className="ui page container">
                <ProfilePic src={Humberto} />
                {(() => {
                    if(loading) {
                        return <Loader style={{margin: '10px auto'}} active inline='centered' />
                    } else {
                        return <Header textAlign="center" as="h1">
                            {birth_name ? ' ' + birth_name : '@' + user_name}
                            <Header.Subheader>{'@' + user_name}</Header.Subheader>
                        </Header>
                    }
                })()}
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