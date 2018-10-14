import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.aka_name;
const renderSuggestion = suggestion => (
  <div>
    {suggestion.aka_name}
  </div>
);

class AutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: '',
      suggestions: [],
      suggestedData: []
    };
  }

  // componentDidMount() {
  //   // console.log(this)
  //   fetch("https://data.cityofchicago.org/resource/cwig-ma7x.json")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         // console.log(result)
  //         this.setState({
  //           isLoaded: true,
  //           suggestedData: result
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

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    return this.state.suggestedData.filter(item =>
      item.aka_name.toLowerCase().includes(inputValue)
    )
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  // onSuggestionSelected

  shouldRenderSuggestions = () => true

  render() {
    const { value, suggestions } = this.state
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
    return <div>Hi there</div>
    // if (suggestions) {
    //   return (
    //     <Autosuggest>
    //       suggestions = {suggestions}
    //       onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
    //       onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
    //       getSuggestionValue = {getSuggestionValue}
    //       renderSuggestion = {renderSuggestion}
    //       inputProps = {inputProps}
    //       shouldRenderSuggestions = {this.shouldRenderSuggestions}
    //     </Autosuggest>
    //   )
    // }
  }
}

export default AutoSuggest;