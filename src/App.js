import React, { Component } from 'react';
import './App.scss';
import Search from './components/search';

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
    fetch("https://data.cityofchicago.org/resource/cwig-ma7x.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
          <header className="App-header">
            <div>Please wait while we fetch from the API...</div>
          </header>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <div>This is the listing app</div>
          </header>
          <Search items={items} />
        </div>
      );
    }
  }
}

export default App;
