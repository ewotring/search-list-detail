import React, { Component } from 'react';
import List from './list'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: [],
      query: '',
      suggestions: [],
      showList: true//,
      // showDetail: false
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

  // getSuggestions = event => {
  getSuggestions = () => {
    // event.preventDefault();
    // console.log(this.state.suggestions)
    // console.log(this.state.query)
    const inputValue = this.state.query.trim().toLowerCase()
    this.setState({
      suggestions: this.state.items.filter(
        item => {
          return item.dba_name.toLowerCase().includes(inputValue)
        }
      ),
      showList: true//,
      // showDetail: false
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

  handleClick = item => {
    // event.preventDefault();
    // console.log(item)
    // console.log('list item clicked')
    // console.log(this.key)
    // console.log(event.target)
    // console.log(event.target.value)
    this.setState({
      item: item,
      // showDetail: true,
      showList: false
    })

  }

  render() {
    console.log(this.state.query)
    console.log(this.state.items)
    console.log(this.state.suggestions)
    // if(!this.state.showList) {
    //   return (
    //     <div>
    //       <form onSubmit={this.getSuggestions}>
    //         <input
    //           placeholder="Search term"
    //           ref={input => this.search = input}
    //           onChange={this.handleInputChange}
    //         />
    //         <p>{this.state.query}</p>
    //         <input
    //           type="submit"
    //           value="Search"
    //         />
    //       </form>
    //     </div>
    //   )
    // } else {
      // console.log(this.state.showList)
      return (
        <div>
          <form onSubmit={
            event => {
            event.preventDefault();
            this.getSuggestions()
          }
            }>
            <input
              placeholder="Search"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            {/* <p>{this.state.query}</p> */}
            <input
              type="submit"
              value="Search"
            />
          </form>
          <List
            items={this.state.suggestions}
            showList={this.state.showList}
            onClick={this.handleClick}
            item={this.state.item}
            // showDetail={this.state.showDetail}
          />
        </div>
      )
    // }
  }
}

export default Search;