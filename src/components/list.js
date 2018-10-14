import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    console.log(this.props)
  }

  componentDidMount() {
    // console.log(props)
  }

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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.inspection_id}>
              <div>
                {item.aka_name}
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
}

export default List;