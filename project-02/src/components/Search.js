import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      genres: []
    }

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}`)
      .then(res => this.setState({ genres: res.data.genres }))
      .catch(err => console.log(err))
  }


  render() {
    console.log('state change', this.state.genres)
    const { genres } = this.state
    console.log('genrerenrenrenr', genres)
    return (
      <form>
        <select>
          <option>Genre</option>
          {genres.map(genre => <option key={genre.id}>{genre.name}</option>)}
        </select>
        <br></br>
        <input type="text" placeholder="Actor Name..." />
      </form>
    )
  }
}

export default Search