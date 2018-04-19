import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import './styles.css';



var fileURL = "https://s3.amazonaws.com/scschoolfiles/112/the_perks_of_being_a_wallflower.pdf"; 

export default class PDF extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }

    prevPage(){
        var { pageNumber, numPages } = this.state;
        var s = pageNumber;
        if(s > 1){
            this.setState({pageNumber: s-1});
        }
    }

    nextPage(){
        var { pageNumber, numPages } = this.state;
        var s = pageNumber;
        if(s < numPages){
            this.setState({pageNumber: s+1});
        }
    }
    

    onDocumentLoad = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {
      const { pageNumber, numPages } = this.state;
   
      return (
        <div id="content">
            <br/><br/><br/><br/><br/><br/>
            <div className="ui container">
                <div className="ui grid">
                    <div className="ten wide column">
                        <Document
                            file={fileURL}
                            onLoadSuccess={this.onDocumentLoad}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="six wide column" id="controlPanel">
                        <div className="ui raised section">
                            <h2>PDF de proyecto</h2>
                            <p>Página {pageNumber} de {numPages}</p>
                            <button onClick={this.prevPage.bind(this)} className="ui left attached button" id="prevPageButton">Pág. anterior</button>
                            <button onClick={this.nextPage.bind(this)} className="right attached ui button" id="nextPageButton">Pág. siguiente</button>
                            <button className="ui inverted green button" id="downloadButton">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }