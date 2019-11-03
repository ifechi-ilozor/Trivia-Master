import React, { Component } from "react";
import "./App.css";
import Title from "./Title";
import FilteredList from "./FilteredList";

/*var list_clues = [
  { name: "Apple Jacks", type: "Circular" },
  { name: "Banana Nut Cheerios", type: "Circular" },
  { name: "Cookie Crisps", type: "Circular" },
  { name: "Honey Nut Cheerios", type: "Circular" },
  { name: "Fruit Loops", type: "Circular" },
  { name: "Reeses Puffs", type: "Circular" },
  { name: "Captain Crunch", type: "Square" },
  { name: "Cinnamon Toast Crunch", type: "Square" },
  { name: "Golden Grahams", type: "Square" },
  { name: "Chex", type: "Square" },
  { name: "Life", type: "Square" },
  { name: "Frosted Mini Wheats", type: "Square" }
];*/

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list_clues: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {

      fetch('http://jservice.io/api/random?count=100')
      .then(response => response.json())
      .then(data => this.setState({
        list_clues: this.state.list_clues.concat(data)
      }))
  }

  render() {
    return (
      <div className="App">
        <Title />
        <FilteredList items={this.state.list_clues} />
      </div>
    );
  }
}

export default App;
