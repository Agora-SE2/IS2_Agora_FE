import React from 'react';
import './styles.css';

const ApprovalBar = props => {
    const {yes, no} = props;
    let positivePercentage, positiveWidth;

    if(yes && no) {
        positivePercentage = yes*100/(yes+no);
    } else {
        positivePercentage = 50;
    }

    positiveWidth = positivePercentage.toString() + '%';

    return (
        <div id="approval-bar">
            <div className="bar">
                <div style={{width: positiveWidth}} id="positive">
                    <h3 className="ui inverted header">
                        {positivePercentage.toFixed(1) + "%"}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ApprovalBar;