import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

import Search from './components/Search'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </main>
  
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)