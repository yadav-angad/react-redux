import React from 'react';

const Child2 = (props) => {
    return (
        <>
            <h1>{props.prop3}</h1>
            <h1>{props.prop4}</h1>

            <button onClick={() => {
                props.updateProp3('Updated Prop 3');
            }}>
                Update Prop 3
            </button>
            <button onClick={() => {
                props.updateProp4('Updated Prop 4');
            }}>
                Update Prop 4
            </button>
        </>
    );
}

export default Child2;