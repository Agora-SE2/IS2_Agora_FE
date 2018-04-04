import React, { Component } from 'react';
import ApprovalBar from '../components/ApprovalBar/ApprovalBar.js';
import ImgProyectoLey from 'images/economia.jpeg'
import CommentarySegment from '../components/CommentarySegment/CommentarySegment.js';

export default class LawProject extends Component {
    render() {
        return (
            <div id="proyectoley"> 
                <div class="blankSpace"></div>
                <div className="ui container grid">
                    <div className="eight wide column">
                        <h1 id="title" >Proyecto #{this.props.match.params.id}</h1>
                        <p>Donec velit arcu, convallis sit amet orci sed, facilisis commodo massa. Pellentesque eget tempus massa, et gravida ex. Quisque vitae placerat odio. Nullam aliquet tincidunt orci. Proin eu metus et dui venenatis tristique ac et leo. Aenean facilisis pretium orci, sed ornare mi pretium quis. Sed egestas sit amet arcu vitae blandit. </p>                    
                        <div class="tags">
                            <a href="#">#Economía </a>
                            <a href="#">#JEP </a>
                        </div>
                    </div>
                    <div className="eight wide column">
                        <img src={ ImgProyectoLey } alt="Descripción estándar de la imagen" width="100%"/>                
                    </div>
                </div>
                <div className="ui container">
                    <ApprovalBar />    
                    
                </div>
                <div className="ui container grid" id="commentary-grid">
                    <div className="eight wide column">
                        <CommentarySegment title="Argumentos a favor"/>
                    </div>
                    <div className="eight wide column">
                        <CommentarySegment title="Argumentos en contra"/>
                    </div>
                </div>
                <div className="ui container">
                </div>
                    
                <p></p>
                
            </div>
            
        );
    }
}