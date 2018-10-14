import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    // console.log(this.props.items)
    // console.log(this.props)
    this.handleClick = this.handleClick.bind(this);
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

  handleClick = event => {
    event.preventDefault();
    console.log('list item clicked')

  }

  render() {
    const items = this.props.items;
      return (
        <ul>
          {items.map(item => (
            <li
              key={item.inspection_id}
              onClick={this.handleClick}
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
  }
}

export default List;