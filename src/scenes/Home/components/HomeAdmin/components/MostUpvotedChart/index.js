import React, { Component } from 'react';
import HorizontalBarChart from 'components/HorizontalBarChart';

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

            data.more_upvoted.forEach((project) => {
                categories.push(project.id);
                columns[0].push(project.yes_votes);
                columns[1].push(project.not_votes);
            })
            this.setState({categories: categories, columns: columns});
        });
    }

    render() {
        const {categories, columns} = this.state;
        return <HorizontalBarChart categories={categories} columns={columns} />;
    }
}