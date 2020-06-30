import React, { Component } from 'react';
import SearchMovies from '../components/SearchMovies.js';
import NavBar from '../components/NavBar.js';
import MovieCardList from '../components/MovieCardList.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStar)

class App extends Component {
  constructor() {
    super();
    this.state = {
      query:'',
      movies:[],
    }
  }

  onSubmitChange = (e) => {
    e.preventDefault(); //必要！！避免瀏覽器儲存query的預設行為（不是很懂為什麼...但沒加就會失敗） 
    const query= this.state.query;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c28333c97f27ab72531d6065d408f418&language=en-US&query=${query}&page=1&include_adult=false`;    
    try{
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results, query:'' }));
    } catch(error) {
      console.log(error);
    }
  }

  onSearchChange = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query, movies } = this.state;
    return (
    <div>
      <div className="fragment">
        <NavBar />
        <SearchMovies 
          searchChange={ this.onSearchChange } 
          submitChange={ this.onSubmitChange } 
          query={ query }
        />
      </div>
      <MovieCardList movies={ movies }/>
    </div>
    );
  }
}

export default App;
