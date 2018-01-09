import React from 'react';

// recieves a number as a prop for sm, md, lg, xlg, xxlg, xxxlg;
// uses ms fabric grid classes

const col = (props) => {
    console.log('props: ', props)
    return (
        <div className="">
            { props.children }
        </div>
    )
};

export default col;