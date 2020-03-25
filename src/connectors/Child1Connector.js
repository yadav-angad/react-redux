import Child1 from '../components/Child1';
import { connect } from 'react-redux';
import { createAction1, createAction2 } from '../actions/action1';

const mapStateToProps = ({r1}) => {
    console.log("store : ", store);
    return {
        prop1: r1.prop1,
        prop2: r1.prop2
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateProp1: (newProp1Value) => dispatch(createAction1(newProp1Value)),
    updateProp2: (newProp2Value) => dispatch(createAction2(newProp2Value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Child1);