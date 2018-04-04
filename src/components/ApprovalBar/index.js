import React from 'react';
import './styles.css';

const ApprovalBar = props => {
    const {yes, no} = props;

    if(yes && no) {
        let positivePercentage = yes*100/(yes+no);
        let positiveWidth = positivePercentage.toString() + '%';

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
    } else 
        return <div>Loading...</div> 
};

export default ApprovalBar;