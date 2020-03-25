import React from 'react';

const Child1 = (props) => {
    return (
        <>
            <h1>{props.prop1}</h1>
            <h1>{props.prop2}</h1>

            <button onClick={() => {
                props.updateProp1('First Update');
            }}>
                First Update
            </button>
        </>
    );
}

export default Child1;