import { connect } from 'react-redux';
import Level1 from '../components/Level1';
import { createResetAction } from '../actions/commonAction';

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(createResetAction())
});

export default connect(null, mapDispatchToProps)(Level1);