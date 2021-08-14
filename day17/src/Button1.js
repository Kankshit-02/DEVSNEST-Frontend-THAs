import React from 'react';

export default class Button1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleCount = () => {
    console.log(this);
    this.setState(prevState => {
      console.log(prevState);
      return {
        count: prevState.count + 1
      };
    });

    this.setState(prevState => {
      console.log(prevState);
      return {
        count: prevState.count + 1
      };
    });
    this.setState(prevState => {
      console.log(prevState);
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return <button onClick={this.handleCount}>{this.state.count}</button>;
  }
}
