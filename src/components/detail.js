import React, { Component } from 'react';
import '../styles/detail.scss';

class Detail extends Component {

  render() {
    console.log(this.props.item)
    const item = this.props.item
    return(
      <div>
        <div class='detail-container'>
          <div class='detail-text'>
            <div class='not-violations-container'>
              <div class='detail-image-placeholder'></div>
                <div>Business name: {item.dba_name}</div>
                <div>Facility type: {item.facility_type}</div>
                <div>Address: {item.address}</div>
                <div>City: {item.city}</div>
                <div>Zip: {item.zip}</div>
                <div>Inspection date: {item.inspection_date}</div>
                <div>Results: {item.results}</div>
                <div>Risk: {item.risk}</div>
            </div>
            <div class='violations'>Violations: {item.violations}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;