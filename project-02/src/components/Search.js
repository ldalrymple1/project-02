import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      genres: [],
      selectedGenre: '',
      searchActor: ''

      
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_ACCESS_TOKEN}`)
      .then(res => this.setState({ genres: res.data.genres }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('I have submitted')

  }


  render() {
    console.log('state change', this.state)
    const { genres } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange} name="selectedGenre">
          <option>Genre</option>
          {genres.map(genre => <option key={genre.id}>{genre.name}</option>)}
        </select>
        <br></br>
        <input type="text" placeholder="Actor Name..." onChange={this.handleChange} name="searchActor"/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Search