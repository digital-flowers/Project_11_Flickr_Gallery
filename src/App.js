import React, { Component } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiKey from './config';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    this.performSearch('cats');
  }

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
    return (
      <BrowserRouter>
        <div className="container">
            <Route path="/" render={props => <Header onSearch={this.performSearch} />}/>
            <Route path="/" render={props => <Container data={this.state.pictures}/>} />
          <Switch>
            <Route path="/search/cats" render={props => <Header onClick={this.performSearch('cats')} />} />
            <Route path="/search/dogs" render={props => <Header onClick={this.performSearch('dogs')} />} />
            <Route path="/search/computers" render={props => <Header onClick={this.performSearch('computers')} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
