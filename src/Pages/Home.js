import { useContext } from 'react'
import { UserContext } from '../UserContext'

export const Home = () => {
  const [user, setUser] = useContext(UserContext)

  return (
    <div>
      <h2>Home</h2>
      <div>{user}</div>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button onClick={() => setUser('Mar')}>Login</button>
      )}
    </div>
  )
}
