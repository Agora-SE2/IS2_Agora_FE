import React from 'react';

import './styles.css';

const FeaturedComment = props => (
    <div className="ui featured agora-comment green inverted segment">
        <blockquote className="comment quote">Unlike other blockquote techniques, this style does not require a nested block-level element (like p). 
            As such, it turns a paragraph into an inline-styled element to keep the content from dropping below the quote.
        </blockquote>
        <div className="signature">
            - argumento en el proyecto de Ley <a href="/proyectoley/1">BLABLABLA</a>
        </div>
    </div>
);

export default FeaturedComment;