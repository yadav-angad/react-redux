import { connect } from 'react-redux';
import Child2 from '../component/Child2';

const mapStateToProps = (store) => {
    console.log("store : " + store);
    return {
        prop3: store.r2.prop3,
        prop4: store.r2.prop4
    };
};

export default connect(mapStateToProps)(Child2);