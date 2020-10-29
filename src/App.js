import { Router, Link } from '@reach/router'

// Pages
import { About, Home, Test } from './Pages'

// Others
import './App.css'
import { UserContext } from './UserContext'
import { useMemo, useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null)
  const providerValue = useMemo(() => [user, setUser], [user, setUser])

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>App</h1>
      {user && <>Hello {user}</>}

      <UserContext.Provider value={providerValue}>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Test path="/test" />
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App
