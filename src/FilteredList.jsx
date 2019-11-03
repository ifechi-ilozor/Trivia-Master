import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

const months = [
  "January", "February", "March", "April", "May" ,
  "June", "July", "August", "September", "October", "November", "December"
];

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  //This function gets called every time a new filter type is selected in the dropdown.
  onSelectFilterType = event => {
    this.setState({ type: event });
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    if (this.state.type === "all") {
      return true;
    }
    return false;
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    if (this.state.type === "Category") {
      return item.category.title.toLowerCase().search(this.state.search) !== -1;
    } else if (this.state.type === "Level") {
      if (item.value === null) {
        return true;
      }
      return (item.value).toString().search(this.state.search) !== -1;
    } else if (this.state.type === "Date") {
        var year = item.airdate.slice(0, 4);
        var day = item.airdate.slice(8, 10);
        var month = item.airdate.slice(5, 7);
        var month_as_word = months[parseInt(month) - 1];
        return (year.search(this.state.search) !== -1) || (day.search(this.state.search) !== -1) ||
              (month_as_word.search(this.state.search) !== -1);
    }
    return item.question.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <DropdownButton title="Search By" id="dropdown-basic-button">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Category" onSelect={this.onSelectFilterType}>
            Category
          </Dropdown.Item>
          <Dropdown.Item eventKey="Level" onSelect={this.onSelectFilterType}>
            Level/Price
          </Dropdown.Item>
          <Dropdown.Item eventKey="Date" onSelect={this.onSelectFilterType}>
            Date
          </Dropdown.Item>
        </DropdownButton>
        <List items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;
