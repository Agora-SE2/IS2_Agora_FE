import React from 'react';

const ProfileEvent = props => (
    <div className="event">
        <div className="label">
            <i className="pencil icon"></i>
        </div>
        <div className="content">
            <div className="summary">
                You posted on your friend.
                <div className="date">Today</div>
            </div>
        </div>
    </div>
);

export default ProfileEvent;