import React, { Component } from 'react';
import Detail from './detail';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: [],
      showDetail: false
    };
    // console.log(this.props.items)
    // console.log(this.props)
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
    // this.setState({
    //   items:
    // })
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

  handleClick = item => {
    // event.preventDefault();
    console.log(item)
    console.log('list item clicked')
    // console.log(this.key)
    // console.log(event.target)
    // console.log(event.target.value)
    this.setState({
      item: item,
      showDetail: true
    })

  }

  render() {
    const items = this.props.items;
    const item = this.state.item;
    if (!this.state.showDetail) {
      return (
        <ul>
          {items.map(item => (
            <li
              key={item.inspection_id}
              onClick={event => {
                event.preventDefault();
                this.handleClick(item)
              }
              }
            >
              <div>
                {item.dba_name}
              </div><br/>
              <div>
                {item.violations}
              </div><br/>
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