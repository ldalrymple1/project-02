import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      genres: [],
      selectedGenre: '',
      searchActor: '',
      actorID: null,
      searchOutput: []
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
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })

  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log('I have submitted', this.state)
    const filteredGenre = this.filteredGenre()
    const formattedActorName = this.formatActorName()
    // console.log(formattedActorName, filteredGenre)
    

    axios.get(`https://api.themoviedb.org/3/search/person?include_adult=false&query=${formattedActorName}&&page=1&language=en-US&api_key=${process.env.MOVIEDB_ACCESS_TOKEN}`)
      .then(res => {
        this.setState({ actorID: res.data.results.pop().id })
        //add error if the typed name is wrong (NEED CLASSES)
        this.props.history.push(`/search/${filteredGenre}&with_people=${this.state.actorID}`)
            
      })
      

  }

  formatActorName() {
    if (this.state.searchActor.split(' ').length > 1) {
      return this.state.searchActor.toLowerCase().split(' ').join('-')
    } else {
      return this.state.searchActor.toLowerCase()
    }
  }

  filteredGenre() {
    if (this.state.selectedGenre !== 'Genre' && this.state.selectedGenre !== '') {
      return `&with_genres=${this.state.genres.filter(genre => genre.name === this.state.selectedGenre ).pop().id}`
    } else {
      return ''
    }
  }


  render() {
    console.log('state change', this.state)
    console.log('state props', this.props)
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