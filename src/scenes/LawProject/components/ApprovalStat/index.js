import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';

class ApprovalStat extends Component {
    render() {
        const {yes, no} = this.props;
        return (
            <div style={{minHeight: '120px'}} className="ui basic segment">
                <Statistic horizontal floated="right">
                    <Statistic.Value>{yes}</Statistic.Value>
                    <Statistic.Label>Votos a favor</Statistic.Label>
                </Statistic>
                <Statistic horizontal floated="right">
                    <Statistic.Value>{no}</Statistic.Value>
                    <Statistic.Label>Votos en contra</Statistic.Label>
                </Statistic>
            </div>
        );
    }
}

export default ApprovalStat;
