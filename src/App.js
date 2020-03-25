import React from 'react';
import './App.css';
import FormConnector from './connectors/FormConnector';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prop1: 'Hello World'
    }
  }

  updateFn = (newVal) => {
    this.setState({
      prop1: newVal
    });
  }

  render() {
    return (
      <>
      <FormConnector />
        {/* <Level1Connector /> */}
      </>
    )
  };
};
