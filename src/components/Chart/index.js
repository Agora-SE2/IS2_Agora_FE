import React, { Component } from 'react';


export default class Chart extends Component {
    render() {
        return <C3Chart data={{ json: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ]
          } }} />
    }
}