import React, { Component } from 'react';

export default class PaginateMenu extends Component {
    render() {
        return (
            <div className="ui pagination menu">
                <a onClick={this.props.callback} className="active item">
                    1
                </a>
                <a onClick={this.props.callback} className="active item">
                    2
                </a>
                <div className="disabled item">
                    ...
                </div>
                <a className="item">
                    10
                </a>
                <a className="item">
                    11
                </a>
                <a onClick={this.props.callback} className="item">
                    {this.props.total}
                </a>
            </div>
        );
    }
}