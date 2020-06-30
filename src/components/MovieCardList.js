import React from 'react';
import MovieCard from './MovieCard.js';
import './MovieCardList.css';

function MovieCardList({ movies }) {
  return (
    <div className="cardlist-container">
    	{
    		movies.map((movie, i) => 
    			<MovieCard 
    				key={ movies[i].id }
    				poster_path={ movies[i].poster_path }
		    		title={ movies[i].title }
		    		date={ movies[i].release_date }
		    		overview={ movies[i].overview }
                    vote_average={ movies[i].vote_average }
    			/>
    		)
    	}
    	
    </div>
  );
}

export default MovieCardList;