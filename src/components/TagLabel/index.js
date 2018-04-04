import React from 'react';
import { Label } from 'semantic-ui-react';

const TagLabel = props => (
    <Label as="a" href={"/categoria/" + props.id} color="red" horizontal>{props.name}</Label>
);

export default TagLabel;