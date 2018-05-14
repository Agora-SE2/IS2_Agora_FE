import React from 'react';
import { Label } from 'semantic-ui-react';
import './styles.css'

const TagLabel = props => (
    <Label className="agora-tag" as="a" href={"/search?tag=" + props.tag.name}  horizontal>{props.tag.name}</Label>
);

export default TagLabel;

// componentWillMount() {
//     fetch(process.env.REACT_APP_BACK_URL + "tags/" + this.props.id + ".json")
//     .then(response => response.json())
//     .then(data => this.setState({ name: data.name }))
// }