import React from 'react';
import { Label } from 'semantic-ui-react';

const WarningFormLabel = props => {
    if(props.allowed)
        return (<Label basic color='red' pointing>{props.message}</Label>);
    else return '';  
}

export default WarningFormLabel;