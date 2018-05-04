import React, { Component } from 'react';
import BarChart from 'components/BarChart';

export default class MostCommentedChart extends Component {
    constructor() {
        super();

        this.state = {
            categories: [],
            columns: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "stats/more_commented.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let categories = [];
            let columns = [['Comentarios']];

            data.more_commented.forEach((project) => {
                categories.push(project.id);
                columns[0].push(project.opinions_count);
            })
            this.setState({categories: categories, columns: columns});
        });
    }

    render() {
        const {categories, columns} = this.state;
        return <BarChart rotated={this.props.rotated} categories={categories} columns={columns} />;
    }
}