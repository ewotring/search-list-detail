import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    })
  }

  render() {
    console.log(this.state.item)
    const item = this.state.item
    return(
      <div>
        <div>Business name: {item.dba_name}</div><br/><br/>
        <div>Address: {item.address}</div><br /><br />
        <div>City: {item.city}</div><br /><br />
        <div>Zip: {item.zip}</div><br /><br />
        <div>Inspection date: {item.inspection_date}</div><br /><br />
        <div>Results: {item.results}</div><br /><br />
        <div>Risk: {item.risk}</div><br /><br />
        <div>Violations: {item.violations}</div><br /><br />
      </div>
    )
  }
}

export default Detail;