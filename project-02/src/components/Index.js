import React from 'react'
import axios from 'axios'

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }

  

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false${this.props.match.params.id}&page=1`)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err))
  }
  
  render() {
    console.log(this.props)
    return (
      <h1>Index</h1>
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