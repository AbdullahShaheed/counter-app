import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //destructuring props to make code cleaner
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
    } = this.props;
    return (
      <div>
        <button
          onClick={onReset} //raising event
          className="btn btn-primary m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} //passing down to child
            onIncrement={onIncrement} //bubbling
            onDecrement={onDecrement} //bubbling
            onDelete={onDelete} //bubbling
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
