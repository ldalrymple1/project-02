import React from 'react'
import axios from 'axios'

import '../styles/show.scss'
import '../styles/navbar.scss'

class Show extends React.Component {
  constructor() {
    super()

    this.state = {
      movieInfo: null
    }

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US`)
      .then(res => this.setState({ movieInfo: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.movieInfo) return null
    return (
      <div className="container">
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
        <div className="carousel-wrapper">
          <div className="carousel">
            <h1>Carousel</h1>
          </div>
        </div>
      </div>
    )
  }

}

export default Show