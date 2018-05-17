import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';

class ApprovalStat extends Component {
    render() {
        const {yes, no} = this.props;
        return (
            <div className="ui grid">
                <div className="four wide column">
                    <i className="big check icon"></i>
                </div>
                <div className="eight wide column">
                    <div className="approval stat">
                        <Statistic.Group>
                            <Statistic>
                                <Statistic.Value>{yes}</Statistic.Value>
                                <Statistic.Label>Votos a favor</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>{no}</Statistic.Value>
                                <Statistic.Label>Votos en contra</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </div>
                </div>
                <div className="four wide column">
                    <i className="delete icon"></i>
                </div>
            </div>
        );
    }
}

export default ApprovalStat;
