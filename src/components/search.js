import React, { Component } from 'react';
import List from './list'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: ''
    }
    console.log(this.props.items)
  }

  componentDidMount() {
    this.setState({
      items: this.props.items
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }


  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Start typing a business name"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default Search;