import { connect } from 'react-redux';
import { createAction3, createAction4 } from '../action/action1';
import Child2 from '../component/Child2';

const mapStateToProps = (store) => {
    console.log("store : " + store);
    return {
        prop3: store.r2.prop3,
        prop4: store.r2.prop4
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateProp3: (newProp3Value) => dispatch(createAction3(newProp3Value)),
    updateProp4: (newProp4Value) => dispatch(createAction4(newProp4Value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Child2);