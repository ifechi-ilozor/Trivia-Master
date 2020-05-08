import React, { Component } from "react";
import "./App.css";
import Title from "./Title";
import FilteredList from "./FilteredList";

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
