import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }

  

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false${this.props.match.params.id}&page=1`)
      .then(res => this.setState({ movies: res.data.results }))
      .catch(err => console.log(err))
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="wrapper">
        {this.state.movies.map(movie =>
          <Link to={`/search/${this.props.match.params.id}/${movie.id}`} key={movie.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>
              <p>{movie.title}</p>
            </div>
          </Link>
        )}
      </div>

    )
  }

}

export default Index


// axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_people=${this.state.actorID}${filteredGenre}&page=1`)
//   .then(res => {
//     console.log('new', res.data)
//     this.setState({ searchOutput: res.data })
//     this.props.history.push(`/search/${this.formatActorName}${this.state.actorID}`)
//   })