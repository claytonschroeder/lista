import React from 'react';

const row = (props) => {
    return (
        <div className="ms-Grid">
            <div className="ms-Grid-row">
                { props.children }
            </div>
        </div>
    )
};

export default row;