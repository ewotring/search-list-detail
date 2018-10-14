import React, { Component } from 'react';
import List from './list'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: '',
      suggestions: [],
      showList: false
    }
    // console.log(this.props.items)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
      suggestions: []
    })
    // console.log(this.state.items)
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
    // this.getSuggestions(this.state.query)
  }

  getSuggestions = event => {
    event.preventDefault();
    // console.log(this.state.suggestions)
    // console.log(this.state.query)
    const inputValue = this.state.query.trim().toLowerCase()
    this.setState({
      suggestions: this.state.items.filter(
        item => {
          return item.dba_name.toLowerCase().includes(inputValue)
        }
      ),
      showList: true
    })
    // return this.state.suggestions.filter(
    //   item => {
    //     // console.log(item)
    //     // console.log(item.dba_name)
    //     // console.log(item.dba_name.toLowerCase())
    //     return item.dba_name.toLowerCase().includes(inputValue)
    //   }
    // )
  }

  render() {
    // console.log(this.state.query)
    // console.log(this.state.items)
    // console.log(this.state.suggestions)
    // if(!this.state.showList) {
    //   return (
    //     <div>
    //       <form onSubmit={this.getSuggestions}>
    //         <input
    //           placeholder="Start typing a business name"
    //           ref={input => this.search = input}
    //           onChange={this.handleInputChange}
    //         />
    //         <p>{this.state.query}</p>
    //         <input
    //           type="submit"
    //           value="Submit"
    //         />
    //       </form>
    //     </div>
    //   )
    // } else {
      return (
        <div>
          <form onSubmit={
            // event => {
            // event.preventDefault();
            this.getSuggestions
          // }
            }>
            <input
              placeholder="Start typing a business name"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
            <input
              type="submit"
              value="Submit"
            />
          </form>
          <List items={this.state.suggestions} />
        </div>
      )
    // }
  }
}

export default Search;