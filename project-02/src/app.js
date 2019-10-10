import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'


import Search from './components/Search'
import Index from './components/Index'
import Show from './components/Show'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <nav>
            <Link to="/search" className="title-name">FILMZ</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/search" component={Search}/>
              <Route path="/movies/:id" component={Show} />
              <Route path="/search/:id" component={Index} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>

    )
  }
  

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)