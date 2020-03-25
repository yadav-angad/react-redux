import { connect } from 'react-redux';
import { updateFirstName, updateLastName } from '../actions/formAction';
import Form from '../components/Form';
import { createResetAction } from '../actions/commonAction';

const mapStateToProps = ({fR}) => {
    console.log("fR : ", fR);
    return fR;
};

const mapDispatchToProps = (dispatch) => ({
    updateFirstName: (firstName) => dispatch(updateFirstName(firstName)),
    updateLastName: (lastName) => dispatch(updateLastName(lastName)),
    reset: () => dispatch(createResetAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);