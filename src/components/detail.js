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
    // console.log(this.state.item)
    return(
      <div>Detail Component</div>
    )
  }
}

export default Detail;