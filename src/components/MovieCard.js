import React from 'react';
import './MovieCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MovieCard({ poster_path, title, date, overview, vote_average }) {
  return (
		<div className="card mb-3" id="override-card" style={{ maxWidth: '75%'}}>
		  <div className="row no-gutters">
		    <div className="col-md-4 bg-img">
		      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}  
		      		className="card-img" 
		      		alt={ title + " poster"}
		      />
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h2 className="card-title">{ title }</h2>
		        <div className="rating">
			        <FontAwesomeIcon icon="star" size="2x" color="orange"/>
			        <strong className="font-vote">{ vote_average }</strong>
			        <span className="font-gray">/</span>
			        <span className="font-gray">10</span>
		        </div>
		        <h6 className="date card-text">{ date }</h6>
		        <h5 className="overview">Overview</h5>
		        <p className="card-text overview-text">"{ overview }"</p>
		      </div>
		    </div>
		  </div>
		</div>    
  );
}

export default MovieCard;

// <div className="card mb-3" >
// 	<div className="row no-gutters">
// 		<div className="col-4">
// 	    	<img className="poster-image" 
// 	    		 style={{maxWidth: '540px'}} 
// 	    		 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
// 	    		 alt={ title + " poster"}
// 	    	/>
// 		</div>
// 		<div className="col-8">
// 	    	<div className="card-body">
// 		    	<h2 className="movie-title card-title">{ title }</h2>
// 		    	<small className="date card-text">{ date }</small>
// 		    	<p className="card-text description">
// 		    		"{ overview }"
// 		    	</p>
// 		    </div>
// 	    </div>
// 	</div>
// </div>