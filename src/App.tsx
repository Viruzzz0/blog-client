import Navbar from './components/Navbar'
import Profile from './page/Profile'
import Saved from './page/Saved'
import Home from './page/Home'
import { Route, Router, Switch } from 'wouter'
import './App.css'
import Initial from './page/Initial'

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" component={Initial} />

        <Router base="/app">
          <Route path="/saved" component={Saved} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />

          <Navbar />
        </Router>

      </Switch>

    </>
  )
}

export default App
