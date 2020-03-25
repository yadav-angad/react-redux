import React from 'react';

const Child2 = (props) => {
    return (
        <>
            <h1>{props.prop3}</h1>
            <h1>{props.prop4}</h1>

            <button onClick={() => {
                props.updateProp1('First Update');
            }}>
                First Update
            </button>
        </>
    );
}

export default Child2;