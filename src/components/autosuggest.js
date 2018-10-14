import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.dba_name;
const renderSuggestion = suggestion => (
  <div>
    {suggestion.dba_name}
  </div>
);

const getSuggestions = value => {
  console.log(this.state.suggestedData)
  const inputValue = value.trim().toLowerCase()
  return this.state.suggestedData.filter(item =>
    item.dba_name.toLowerCase().includes(inputValue)
  )
}

class AutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      suggestedData: []
    };
    console.log(this.props.items)
  }

  componentDidMount() {
    this.setState({
      suggestedData: this.props.items
    })
  }


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  // onSuggestionSelected

  // shouldRenderSuggestions = () => true

  render() {
    console.log(this.state)
    const { value, suggestions } = this.state
    // const value = 'swiss cheese'
    // const suggestions = ['oranges', 'apples']
    console.log(suggestions);
    const inputProps = {
      placeholder: 'Type part of business name',
      value,
      onChange: this.onChange,
    };
    // console.log(value)
    // console.log(this.state.value)
    // console.log(this.state)
    // console.log(inputProps)
    // console.log(suggestions)
    // return <div>Hi there</div>
    if (suggestions) {
      console.log(suggestions)
      return (
        <Autosuggest>
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
          getSuggestionValue = {getSuggestionValue}
          renderSuggestion = {renderSuggestion}
          inputProps = {inputProps}
          {/* shouldRenderSuggestions = {this.shouldRenderSuggestions} */}
        </Autosuggest>
      )
    } else return <div>Hi there</div>
  }
}

export default AutoSuggest;