import { connect } from 'react-redux';
import { createAction3, createAction4 } from '../actions/action2';
import Child2 from '../components/Child2';

const mapStateToProps = ({r2}) => {
    console.log("r2 : ", r2);
    return {
        prop3: r2.prop3,
        prop4: r2.prop4
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateProp3: (newProp3Value) => dispatch(createAction3(newProp3Value)),
    updateProp4: (newProp4Value) => dispatch(createAction4(newProp4Value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Child2);