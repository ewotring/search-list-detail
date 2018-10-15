import React, { Component } from 'react';
import Detail from './detail';
import '../styles/list.scss'
class List extends Component {

  render() {
    let items = this.props.items;
    const item = this.props.item;
    if (this.props.showList) {
      return (
        <ul>
          {items.map(item => (
            <li
              key={item.inspection_id}
              onClick={event => {
                event.preventDefault();
                this.props.onClick(item)
              }
              }
            >
            <div class='image-placeholder'>
              <div class='image-proper'></div>
            </div>
            <div class='list-item-titles'>
              <div class='business-name'>{item.dba_name}</div>
              <div class='facility-type'>{item.facility_type}</div>
            </div>
              <div class='list-details'>
                <div>Address: {item.address}</div>
                <div>City: {item.city}</div>
                <div>Zip: {item.zip}</div>
                <div>Inspection date: {item.inspection_date}</div>
                <div>Results: {item.results}</div>
                <div>Risk: {item.risk}</div>
              </div>
            </li>
          ))}
        </ul>
      )
    } else {
      return (
        <Detail
          item={item}
        />
      )
    }
  }
}

export default List;