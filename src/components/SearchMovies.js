import React from 'react';
import './SearchMovies.css';

function SearchMovies({ searchChange, submitChange, query }) {
  return (
    <div className="search-container">
        <h1 className="title-cta">Search Now.</h1>
        <h2 className="title">Want to find out more about your favorite movies?</h2>
            <div className="search-form">
            	<form className="form" onSubmit={ submitChange }>
            		<label className="label" htmlFor="query"></label>
            		<input 
            			className="input" 
            			type="text" 
            			name="query" 
                        value={ query } 
            			onChange={ searchChange }
            			placeholder="search for a movie, i.e. Star wars..."
            		/>
            		<button className="button" type="submit">Search</button>
            	</form>
            </div>
    </div>
  );
}

export default SearchMovies;