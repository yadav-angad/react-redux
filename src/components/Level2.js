import React from 'react';
import Child1Connector from '../connectors/Child1Connector';
import Child2Connector from '../connectors/Child2Connector';

const Level2 = () => (
    <>
        <Child1Connector />
        <Child2Connector />
    </>
)
    ;

export default Level2;