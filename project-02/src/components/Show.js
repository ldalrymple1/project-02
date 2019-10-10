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
      <div className="show-wrapper">
        <div className="movie-image">
          <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfo.poster_path}`} alt={this.state.movieInfo.title}></img>
          
        </div>
        <div className="movie-bio">
          <h1>{this.state.movieInfo.title}</h1>
          <h4>Overview</h4>
          <p>{this.state.movieInfo.overview}</p>
          <p>Runtime: {this.state.movieInfo.runtime} minutes</p>
          <p>Release Date: {this.state.movieInfo.release_date}</p>
          <p>Vote average: {this.state.movieInfo.vote_average}</p>
        </div>
        <div className="carousel">

        </div>
      </div>
    )
  }

}

export default Show