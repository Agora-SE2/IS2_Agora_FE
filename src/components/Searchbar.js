import React, { Component } from 'react';
import './Searchbar.css';

export default class Searchbar extends Component {
    render() {
        return (
            <div class="ui huge search">
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Common passwords..." />
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        );
    }
}