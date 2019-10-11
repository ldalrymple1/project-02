import React from 'react'
import axios from 'axios'

import '../styles/show.scss'
import '../styles/navbar.scss'
import '../styles/animate.css'

class Show extends React.Component {
  constructor() {
    super()

    this.state = {
      movieInfo: null,
      similarMovies: []
    }

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US`)
      .then(res => this.setState({ movieInfo: res.data }))
      .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US&page=1`)
      .then(res => this.setState({ similarMovies: res.data.results }))
      .catch(err => console.log(err))
    
  }


  render() {
    console.log(this.state)
    if (!this.state.movieInfo) return null
    return (
      <div className="container animated fadeInRight">
        <div className="show-wrapper">
          <div className="movie-image">
            <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfo.poster_path}`} alt={this.state.movieInfo.title}></img>

          </div>
          <div className="movie-bio">
            <h1>{this.state.movieInfo.title}</h1>
            <h2>Overview</h2>
            <p>{this.state.movieInfo.overview}</p>
            <p><strong>Runtime:</strong> {this.state.movieInfo.runtime} minutes</p>
            <p><strong>Release Date:</strong> {this.state.movieInfo.release_date}</p>
            <p><strong>Vote average:</strong> {this.state.movieInfo.vote_average}</p>
          </div>
        </div>
        <div className="similar-movies">
          <h1>SIMILAR MOVIES</h1>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel">
            {this.state.similarMovies.map(movie => 
              <div key={movie.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

}

export default Show