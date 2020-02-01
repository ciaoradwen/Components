import React from 'react';

function Container(props) {
    return (
        <div className="blue-bg">
            {props.children}
        </div>
    );
}


export default Container;