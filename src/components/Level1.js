import React from 'react';
import Level2 from './Level2';

const Level1 = (props) => {

    return (
        <>
            <button onClick={() => {
                props.reset();
            }}>
                Reset
            </button>
            <Level2 />
        </>
    )
};

export default Level1;