import React, { Component } from 'react';
import BarChart from 'components/BarChart';

export default class MostUpvotedChart extends Component {
    constructor() {
        super();

        this.state = {
            categories: [],
            columns: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "stats/more_upvoted.json")
        .then(response => response.json())
        .then(data => {
            let categories = [];
            let columns = [['Votos a favor'], ['Votos en contra']];

            data.forEach((project) => {
                categories.push(project.id);
                columns[0].push(project.yes_votes);
                columns[1].push(project.not_votes);
            })

            console.log(categories);
            this.setState({categories: categories, columns: columns});
        });
    }

    render() {
        const {categories, columns} = this.state;
        return <BarChart rotated={this.props.rotated} categories={categories} columns={columns} />;
    }
}