import React, { Component } from 'react';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';

import './styles.css';

export default class Searchbar extends Component {
    max_results = 5

    constructor() {
        super();

        this.state = {
            isLoading: false,
            results: [{title: "Cargando..."}],
            value: ''
        }

        this.handleResultSelect = this.handleResultSelect.bind(this); 
        this.handleSearchChange = this.handleSearchChange.bind(this); 
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })    

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
    
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();    

            fetch(process.env.REACT_APP_BACK_URL + "law_projects?name=" + value)
            .then(response => response.json())
            .then(data => {
                const results = _.times((data.length > this.max_results ? this.max_results : data.length), (index) => ({
                    title: data[index].name,
                    description: data[index].description,
                    key: index
                }));

                this.setState({
                    results: results, 
                    isLoading: false
                })
            });
        }, 300)
    }

    resetComponent = () => this.setState({isLoading: false, results: [{title: 'Cargando...'}]})

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                noResultsMessage={
                    <h3 className="ui header">
                        ¡Lo sentimos!
                        <div className="sub header">
                            No encontramos resultados para esta búsqueda.
                        </div>
                    </h3>}
                {...this.props}
            />
        );
    }
}