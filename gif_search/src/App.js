import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }
  componentDidMount(){
    /*These snipet of codes are for feth api */

    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    // .then(res => res.json())
    // .then(resData =>{
    //   this.setState({gifs: resData});
    // })
    // .catch(error => {
    //   console.log('Error fetching and parsing data',error);
    // });

    /* End code for feth api */
    /*These snippet of codes are for axios*/
      // axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      // .then(response => {
      //     this.setState({
      //       gifs: response.data.data
      //     });
      // })
      // .catch(error => {
      //   console.log('Error fetching and parsing data', error);
      // });
      this.performSearch();

  }
    performSearch = (query='nyc') => {
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
          this.setState({
            gifs: response.data.data,
            loading: false
          });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
        {
          (this.state.loading)
          ? <p> Loading...</p>
          :<GifList data={this.state.gifs}/>
        }

        </div>
      </div>
    );
  }
}
