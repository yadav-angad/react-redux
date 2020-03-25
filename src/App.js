import React from 'react';
import './App.css';
import Level1 from './component/Level1';

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
        <Level1 />
      </>
    )
  };
};
