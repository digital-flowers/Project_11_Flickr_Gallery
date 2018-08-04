import React, { Component } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import apiKey from './config';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  // componentDidMount() {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
  //     .then(response => {
  //       this.setState({
  //         pictures: response.data.photos.photo
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.pictures);
    return (
      <BrowserRouter>
        <div className="container">
          <Header data={this.state.pictures}/>
          <Container />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
