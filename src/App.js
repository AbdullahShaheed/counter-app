import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    // What happens when state changes? review video(1-1, 3-13, 4-17)
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clone the array, but the cloned array still store the same refernces to items of the original because they are objects.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //So we must also clone the counter object to get a copy in order not to modify the state directly because this is No No in React.
    counters[index].value++; //modifying the copy
    this.setState({ counters: counters }); //modify the counters property (left) with counters const (right)
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} //passing down data to child
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters} //passing down to child
            onReset={this.handleReset} //I expect an event from you, I name it onReset
            onIncrement={this.handleIncrement} //I expect an event from you, I name it onIncremnt
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} //I expect an event from you, I name it onDelete
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
