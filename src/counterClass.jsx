import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Le constructeur est appelé');
  }

  componentDidMount() {
    console.log('Le composant est monté');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Ne se met à jour que si l'état "count" change
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Le composant a été mis à jour');
  }

  componentWillUnmount() {
    console.log('Le composant sera démonté');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h1>Compteur : {this.state.count}</h1>
        <button onClick={this.increment}>Incrémenter</button>
        <button onClick={this.decrement}>Decremente</button>
      </div>
    );
  }
}

export default Counter;
