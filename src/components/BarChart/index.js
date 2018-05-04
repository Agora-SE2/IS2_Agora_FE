import  React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const HorizontalBarChart = props => {
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
}

export default HorizontalBarChart;