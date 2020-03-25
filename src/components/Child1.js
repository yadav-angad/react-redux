import React from 'react';

const Child1 = (props) => {
    return (
        <>
            <h1>{props.prop1}</h1>
            <h1>{props.prop2}</h1>

            <button onClick={() => {
                props.updateProp1('Updated Prop 1');
            }}>
                Update Prop 1
            </button>
            <button onClick={() => {
                props.updateProp2('Updated Prop 2');
            }}>
                Update Prop 2
            </button>
        </>
    );
}

export default Child1;