import React, { Component } from 'react';
import axios from 'axios';
import Container from './components/Container';
import { BrowserRouter, Route } from 'react-router-dom';
import apiKey from './config';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beach&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // performSearch = (query) => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=615d7d109703f1bda87afb3032496d43&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  //     .then(response => {
  //       this.setState({
  //         pictures: response.data.photos.photo
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    console.log(this.state.pictures);
    return (
      <BrowserRouter>
        < Container data={this.state.pictures}/>
      </BrowserRouter>
    );
  }
}

export default App;
