import React from 'react'
import axios from 'axios'

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
      <h1>{this.state.movieInfo.title}</h1>
    )
  }

}

export default Show