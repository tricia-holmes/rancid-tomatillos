import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ currentMovie, closeModal }) => {
  return (
    <div className="movieDetailsModal" style={{backgroundImage: `url(${currentMovie['backdrop_path']})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="movieDetailsContent">
        <div className="movieDetailsBtnContainer">
        <button className="movieDetailsCloseBtn" onClick={closeModal}>Back</button>
        </div>
        <img className='movieDetailsPoster' src={`${currentMovie['poster_path']}`} alt="" />
        <h1 className='movieDetailsTitle'>{currentMovie.title}</h1>
        <div className='movieDetailsInfo'>
          <p>Average Rating: {Math.round(currentMovie['average_rating'] * 10) / 10}</p>
          <p>Release Date: {currentMovie['release_date']}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
