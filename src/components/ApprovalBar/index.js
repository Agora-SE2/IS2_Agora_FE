import React, { Component } from 'react';

import './styles.css';

var positiveSize = 70;
var negativeSize = 30;

export default class ApprovalBar extends Component {
    render() {
        return (
            <div id="approval-bar">
                <div class="bar">
                    <div id="positive" width='20px'></div>
                </div>
            </div>
        );        
    }
}