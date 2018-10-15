import React, { Component } from 'react';
import List from './list'
import '../styles/search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: [],
      query: '',
      suggestions: [],
      showList: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
      suggestions: []
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  getSuggestions = () => {
    const inputValue = this.state.query.trim().toLowerCase()
    this.setState({
      suggestions: this.state.items.filter(
        item => {
          return item.dba_name.toLowerCase().includes(inputValue)
        }
      ),
      showList: true
    })
  }

  handleClick = item => {
    this.setState({
      item: item,
      showList: false
    })

  }

  render() {
    console.log(this.state.query)
    console.log(this.state.items)
    console.log(this.state.suggestions)
      return (
        <div class='search-container'>
          <form onSubmit={
            event => {
            event.preventDefault();
            this.getSuggestions()
          }
            }>
            <input
              class='search-input'
              placeholder="Search"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <input
              class='search-button'
              type="submit"
              value="Search"
            />
          </form>
          <List
            items={this.state.suggestions}
            showList={this.state.showList}
            onClick={this.handleClick}
            item={this.state.item}
          />
        </div>
      )
  }
}

export default Search;