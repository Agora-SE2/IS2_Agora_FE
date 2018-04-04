import React, { Component } from 'react';

import './styles.css';

export default class ApprovalBar extends Component {
    render() {
        return (
            <div id="approval-bar">
                <div className="bar">
                    <div id="positive" width='20px'></div>
                </div>
            </div>
        );        
    }
}