import React, {Component} from 'react';

const months = [
  "January", "February", "March", "April", "May" ,
  "June", "July", "August", "September", "October", "November", "December"
];

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <p id="res">Answer: {this.props.ans}, Category: {this.props.category}, Level/Price: {this.props.level},
           Year: {this.props.air}, Month: {this.props.month}, Day: {this.props.day}
          </p>
        </div>
      </div>
    );
  }
};

class List extends Component {
  constructor(props) {
    super(props);
    var map = new Map();
    this.props.items.map(item => {map.set(item.id, false)});
    this.state = {
      showPopup: map
    };
  }

  togglePopup(clicked_id) {
    this.setState({
      showPopup: this.state.showPopup.set(clicked_id, !this.state.showPopup.get(clicked_id))
    });
  }

  renderList() {
    const items = this.props.items.map(item => {
      var month_num = item.airdate.slice(5, 7);
      return <li className="popup" id={item.id} onClick={this.togglePopup.bind(this, item.id)} key={item.id}>
      Q: {item.question}
      {this.state.showPopup.get(item.id) ? <Popup ans={item.answer} category={item.category.title} level={item.value}
      air={item.airdate.slice(0, 4)} month={months[parseInt(month_num)-1]} day={item.airdate.slice(8, 10)}
      closePopup={this.togglePopup.bind(this, item.id)}/> : null}
      </li>;
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
