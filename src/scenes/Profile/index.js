import React, { Component } from 'react';

import Humberto from 'images/humberto.jpg';

import { Header, Image} from 'semantic-ui-react';

export default class Profile extends Component {
    render() {
        return (
            <div className="ui page container">
                <Image centered circular size="medium" src={Humberto} />
                <Header textAlign="center" as="h1">
                    {' '}Humberto de la Calle
                    <Header.Subheader>Usuario</Header.Subheader>
                </Header>
            </div>
        );
    }
}