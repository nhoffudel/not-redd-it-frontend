import React from 'react';
import "./Entry.css";

class Entry extends React.Component {

  render() {
    let year = this.props.date.substr(0,4);
    let month = this.props.date.substr(5,2);
    if (month[0] === '0') month = month[1];
    let day = this.props.date.substr(8,2);
    if (day[0] === '0') day = day[1];
    let formattedDate = `${month}-${day}-${year}`;
    let time = this.props.date.substr(11,8)
    return (
      <div>               
        <h1>{this.props.title}</h1>
        <h3>By {this.props.author} on {formattedDate} at {time}</h3>
        <p id="entry">{this.props.content}</p>
      </div>
    );
  }
}

export default Entry;