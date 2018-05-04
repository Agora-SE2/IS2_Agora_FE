import  React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const HorizontalBarChart = props => {
    console.log("chart", props.categories);
    if(props.categories.length > 0)
        return (
            <C3Chart axis={{
                x: {
                    type: 'category',
                    categories: props.categories,
                },
                rotated: props.rotated
                }} 
                data={{
                    columns: props.columns,
                    type: 'bar'
            }} />
        );
    else return 'Loading...';
}

export default HorizontalBarChart;