import React from 'react';
import { Statistic } from 'semantic-ui-react';

const ApprovalStat = props => (
    <div className="approval stat">
        <Statistic.Group>
            <Statistic>
                <Statistic.Value>{props.yes}</Statistic.Value>
                <Statistic.Label>Votos a favor</Statistic.Label>
            </Statistic>
            <Statistic>
                <Statistic.Value>{props.no}</Statistic.Value>
                <Statistic.Label>Votos en contra</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    </div>
);

export default ApprovalStat;
