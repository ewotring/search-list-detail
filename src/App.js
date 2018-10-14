import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/list';
import AutoSuggest from './components/autosuggest'
// import AutoComplete from './components/autocomplete'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  componentDidMount() {
    axios.get("https://data.cityofchicago.org/resource/cwig-ma7x.json")
      // .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  // componentDidMount() {
  //   fetch("https://data.cityofchicago.org/resource/cwig-ma7x.json")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
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
    const itemData = this.state.items
    if (itemData.length !== 0) {
      return (
        <div className="App">
          <header className="App-header">
            <div>This is the listing app</div>
          </header>
          {console.log(this.state.items)}
          {console.log(itemData)}
          <AutoSuggest items={this.state.items} />
          {/* <AutoComplete /> */}
          <List itemData={itemData} />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default App;
