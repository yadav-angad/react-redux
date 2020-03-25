import React from 'react';

const Form = (props) => {
    return (<>
        <form onSubmit={(e) => {
            console.log('submit triggered');
            e.preventDefault();
        }}>
            <label htmlFor="firstName" value="First Name">First Name</label>
            <input type="text" id="firstName" name="firstName" value={props.firstName}
                onChange={(e) => {
                    console.log(e.target.value);
                    props.updateFirstName(e.target.value);
                }} />
            <br />
            <label htmlFor="lastName" value="Last Name" >Last Name</label>
            <input type="text" id="lastName" name="lastName" value={props.lastName}
                onChange={(e) => {
                    console.log(e.target.value);
                    props.updateLastName(e.target.value);
                }} />
            <br />
            <input type="submit" value="Submit" />
            <button onClick={() => {
                props.reset();
            }}>
                Reset
            </button>
        </form>
    </>);
};

export default Form;