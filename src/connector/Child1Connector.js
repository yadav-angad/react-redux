import Child1 from '../component/Child1';
import { connect } from 'react-redux';
import { createAction1, createAction2 } from '../action/action1';

const mapStateToProps = (store) => {
    console.log("store : " + store.toString());
    return {
        prop1: store.r1.prop1,
        prop2: store.r1.prop2
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateProp1: (newProp1Value) => dispatch(createAction1(newProp1Value)),
    updateProp2: (newProp2Value) => dispatch(createAction2(newProp2Value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Child1);