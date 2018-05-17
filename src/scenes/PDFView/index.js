import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import './styles.css';

export default class PDFView extends Component {
    constructor() {
        super();

        this.state = {
            url: '',
            name: '',
            numPages: null,
            pageNumber: 1,
          }
      
    }

    componentWillMount() {
        // FIXME: consuming two different backends - data is not coherent!
        const {id} = this.props.match.params;
        this.setState({
            url: process.env.REACT_APP_PDF_URL + "law_projects/" + id + ".pdf"
        });

        fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + id + ".json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                name: data.name
            })
        })
    }

    prevPage(){
        var { pageNumber } = this.state;
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
      const { url, name, pageNumber, numPages } = this.state;
   
      return (
        <div id="content">
            <br/><br/><br/><br/><br/><br/>
            <div className="ui container">
                <div className="ui grid">
                    <div className="ten wide column">
                        <Document
                            file={url}
                            onLoadSuccess={this.onDocumentLoad}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="six wide column" id="controlPanel">
                        <div className="ui raised section">
                            <h2>PDF de {name}</h2>
                            <p>Página {pageNumber} de {numPages}</p>
                            <br/>
                            <br/>
                            <button onClick={this.prevPage.bind(this)} className="ui left  attached inverted icon button" id="prevPageButton"><i className="chevron left icon"></i></button>
                            <button onClick={this.nextPage.bind(this)} className="ui right attached inverted icon button" id="nextPageButton"><i className="chevron right icon"></i></button>
                            <br/>
                            <br/>
                            <button className="ui green button" id="downloadButton">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }