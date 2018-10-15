import React, { Component } from 'react';
import Detail from './detail';
import '../styles/list.scss'
class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // items: [],
  //     // item: [],
  //     // showDetail: true,
  //     // showList: false
  //   };
  //   // console.log(this.props.items)
  //   // console.log(this.props)
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  // componentDidMount() {
  //   this.setState({
  //     items: this.props.items//,
  //     // showDetail: this.props.showDetail,
  //     // showList: this.props.showList
  //   })
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.List !== prevState.showList) {
  //     this.setState({
  //       showDetail: false,
  //       showList: true
  //     })
  //   }
  // }

  // componentDidMount() {
  //   fetch("https://data.cityofchicago.org/resource/cwig-ma7x.json")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  // handleClick = item => {
  //   // event.preventDefault();
  //   // console.log(item)
  //   // console.log('list item clicked')
  //   // console.log(this.key)
  //   // console.log(event.target)
  //   // console.log(event.target.value)
  //   this.setState({
  //     item: item,
  //     // showDetail: true,
  //     showList: false
  //   })

  // }

  render() {
    // console.log(this.props.items)
    // console.log(this.state.items)
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